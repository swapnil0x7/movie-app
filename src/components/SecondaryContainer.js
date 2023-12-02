import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);

	return (
		movies && (
			<div className=' bg-gray-950 text-white'>
				<div className='relative z-20 mt-0 md:-mt-40 md:pl-12'>
					<MovieList title={'Now Playing'} movies={movies?.nowPlayingMovies} />
					<MovieList title={'Popular TV Shows'} movies={movies?.popularTvSeries} />
					<MovieList title={'Popular'} movies={movies?.popularMovies} />
					<MovieList title={'Upcoming Movies'} movies={movies?.upcomingMovies} />
				</div>
			</div>
		)
	);
};

export default SecondaryContainer;
