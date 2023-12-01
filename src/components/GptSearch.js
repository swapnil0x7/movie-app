import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constants';

const GptSearch = () => {
	return (
		<div>
			<img
				className='absolute filter brightness-75 -z-10'
				src={BACKGROUND_IMG}
				alt='background'
			/>
			<GptSearchBar />
			<GptMovieSuggestions />
		</div>
	);
};

export default GptSearch;
