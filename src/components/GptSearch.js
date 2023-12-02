import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BACKGROUND_IMG } from '../utils/constants';

const GptSearch = () => {
	return (
		<>
			<div className='fixed filter brightness-75 -z-10'>
				<img
					className=' h-screen object-cover md:object-none md:h-auto'
					src={BACKGROUND_IMG}
					alt='background'
				/>
			</div>
			<div className='md:p-0'>
				<GptSearchBar />
				<GptMovieSuggestions />
			</div>
		</>
	);
};

export default GptSearch;
