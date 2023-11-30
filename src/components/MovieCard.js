import React from 'react';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
	return (
		<div className='w-48 px-1 hover:overflow-y-hidden hover:scale-125 transition duration-300 cursor-pointer object-cover'>
			<img src={IMG_CDN_URL + posterPath} alt='movie-card' />
		</div>
	);
};

export default MovieCard;
