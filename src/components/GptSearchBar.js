import React, { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openAI from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

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
			'. Only give me names of 5 movies and comma separated like the example result given ahead. Example results: 3 Idiots, Dilwale, Don 2, Interstellar, Meg 2';

		// const gptResults = await openAI.completions.create({
		// 	model: 'text-davinci-002',
		// 	prompt: gptQuery,
		// 	max_tokens: 6,
		// 	temperature: 0,
		// });
		// console.log(gptResults.choices);

		const gptResults = ['Napoleon', 'The marvels', 'The Equalizer 3', 'Fast X', 'Oppenheimer'];

		const promiseArray = await gptResults.map((movie) => searchMovieTMDB(movie));
		const tmdbResults = await Promise.all(promiseArray);

		dispatch(addGptMovieResult({ movieNames: gptResults, movieResults: tmdbResults }));
	};

	return (
		<div className='pt-[10%] flex justify-center'>
			<form className='w-1/2 bg-opacity-0 grid grid-cols-12'>
				<input
					type='text'
					ref={searchText}
					className='p-4 m-4 col-span-9 shadow-lg'
					placeholder={gptSearchPlaceholder}
				/>
				<button
					onClick={handleGptSearchCLick}
					className='py-2 px-4 bg-red-600 col-span-3 m-4 text-white rounded-lg shadow-lg'>
					{search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
