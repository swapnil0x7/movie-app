import React from 'react';

const VideoTitle = (props) => {
	const { title, overview } = props;

	return (
		<div className='pt-[25%] md:pt-[15%] px-6 md:px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
			<h1 className='ml-2 md:m-0 text-3xl md:text-5xl font-bold'>{title}</h1>
			<p className='hidden md:inline-block py-6 text-lg w-1/3 '>{overview}</p>
			<div className='my-2 md:m-0'>
				<button className='m-1 bg-white text-black py-1 md:py-3 px-4 md:px-10 text-lg md:text-xl rounded-lg hover:bg-opacity-80'>
					<img
						alt='play-icon'
						className='w-5 md:w-6 h-5 md:h-6 inline pb-1 mr-1'
						src='https://icons.veryicon.com/png/o/internet--web/web-video-clip/play-332.png'
					/>
					Play
				</button>
				<button className='hidden md:inline-block m-2 bg-gray-400 text-white p-3 px-10 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80'>
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
