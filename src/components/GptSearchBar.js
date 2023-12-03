import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';
import openai from '../utils/openai';

const GptSearchBar = () => {
	const language_id = useSelector((store) => store.config.lang);
	const { search, gptSearchPlaceholder } = lang[language_id];
	const dispatch = useDispatch();
	const searchText = useRef(null);

	const searchMovieTMDB = async (movie) => {
		const response = await fetch(
			'https://api.themoviedb.org/3/search/movie?query=' +
				movie +
				'&include_adult=false&language=en-US&page=1',
			API_OPTIONS
		);
		const data = await response.json();
		return data.results;
	};

	const handleGptSearchCLick = async (e) => {
		e.preventDefault();

		// make an API call to GPT-API
		const gptQuery =
			'Act as a movie recommendation system and suggest some movies for the query : ' +
			searchText.current.value +
			'.Only give me names of 5 movies and comma separated like the example result given ahead. Example results: 3 Idiots, Dilwale, Don 2, Interstellar, Meg 2';

		const gptResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: gptQuery }],
			model: 'gpt-3.5-turbo',
		});

		// if (!gptResults.choices) return <Error />

		const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

		const promiseArray = await gptMovies.map((movie) => searchMovieTMDB(movie));
		const tmdbResults = await Promise.all(promiseArray);
		console.log(tmdbResults);

		dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
	};

	return (
		<div className='pt-[40%] md:pt-[10%] flex justify-center'>
			<form className=' my-2 py-2 w-full md:w-1/2 bg-opacity-0 grid grid-cols-12'>
				<input
					type='text'
					ref={searchText}
					className='p-4 m-4 col-span-9 shadow-lg'
					placeholder={gptSearchPlaceholder}
				/>
				<button
					onClick={handleGptSearchCLick}
					className='py-2 md:px-4 bg-red-600 col-span-3 mr-4 my-4 md:m-4 text-white rounded-lg shadow-lg'>
					{search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
