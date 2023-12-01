import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
	if (!posterPath) return;
	return (
		<div className='w-48 px-1 hover:overflow-y-hidden hover:scale-[1.15] transition duration-200 cursor-pointer shadow-md rounded'>
			<img src={IMG_CDN_URL + posterPath} alt='movie-card' />
		</div>
	);
};

export default MovieCard;
