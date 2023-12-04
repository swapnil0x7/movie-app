import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';
import { MagnifyingGlass } from 'react-loader-spinner';

const GptMovieSuggestions = ({ showLoader, setShowLoader }) => {
	const { movieResults, movieNames } = useSelector((store) => store.gpt);

	const getRandomString = () => {
		const messages = {
			loading: 'Hold your horses, we are brewing the perfect recommendations...',
			processing: 'Building your request with love and care...',
			waiting: "Don't worry, the API is faster than a squirrel on roller skates!...",
			amazed: "Preparing to be amazed by the API's magic...",
			vortex: 'Fetching suggestions... This might take a moment.',
		};
		const keys = Object.keys(messages);
		const randomIndex = Math.floor(Math.random() * keys.length);
		return messages[keys[randomIndex]];
	};

	useEffect(() => {
		if (movieNames && movieNames.length) setShowLoader(false);
	}, [movieNames]);

	if (!movieNames)
		return (
			showLoader && (
				<div className='w-screen flex flex-col h-[75%] absolute z-50 mx-0 p-2 md:p-4 m-4 text-8xl bg-black text-white font-bold bg-opacity-70 md:bg-opacity-[0.80]'>
					<MagnifyingGlass
						visible={true}
						height='110'
						width='110'
						ariaLabel='MagnifyingGlass-loading'
						wrapperStyle={{
							'margin-top': '5%',
							'margin-bottom': '20px',
							'margin-left': 'auto',
							'margin-right': 'auto',
						}}
						wrapperClass='MagnifyingGlass-wrapper'
						glassColor='white'
						color='#FB5430'
					/>

					<div className=' text-white opacity-90 font-bold text-xl text-center'>
						{getRandomString()}
					</div>
				</div>
			)
		);
	else
		return (
			<div className=' mx-0 p-2 md:p-4 m-4 bg-black text-white font-bold bg-opacity-80 md:bg-opacity-[0.85]'>
				<div>
					{movieNames?.map((movie, index) => {
						return <MovieList key={movie} title={movie} movies={movieResults[index]} />;
					})}
				</div>
			</div>
		);
};

export default GptMovieSuggestions;
