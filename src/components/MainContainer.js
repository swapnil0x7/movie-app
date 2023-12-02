import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
	const movies = useSelector((store) => store.movies?.nowPlayingMovies);
	if (!movies) return;

	const mainMovie = movies[0];
	const { id, original_title, overview } = mainMovie;
	return (
		<div className='pt-[35%] bg-black md:pt-0'>
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
