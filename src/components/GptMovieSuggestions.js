import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);
	if (!movieNames) return;
	return (
		<div className='p-2 md:p-4 m-4 bg-black text-white font-bold bg-opacity-[0.85]'>
			<div>
				{movieNames.map((movie, index) => {
					return <MovieList key={movie} title={movie} movies={movieResults[index]} />;
				})}
			</div>
		</div>
	);
};

export default GptMovieSuggestions;
