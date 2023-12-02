import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
	return (
		<div className='pl-6'>
			<h1 className='pt-4 md:pt-0 text-lg md:text-2xl px-1 md:px-2'>{title}</h1>
			<div className='flex overflow-x-scroll overflow-hidden'>
				<div className='flex pt-2 md:py-8'>
					{movies?.map((movie) => (
						<MovieCard key={movie.id} posterPath={movie.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
