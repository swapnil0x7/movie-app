import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
	const language_id = useSelector((store) => store.config.lang);
	const { search, gptSearchPlaceholder } = lang[language_id];
	return (
		<div className='pt-[10%] flex justify-center'>
			<form className='w-1/2 bg-opacity-0 grid grid-cols-12'>
				<input
					type='text'
					className='p-4 m-4 col-span-9 '
					placeholder={gptSearchPlaceholder}
				/>
				<button className='py-2 px-4 bg-red-600 col-span-3 m-4 text-white rounded-lg'>
					{search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
