import React from 'react';

const VideoTitle = (props) => {
	const { title, overview } = props;

	return (
		<div className='pt-[15%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
			<h1 className=' text-5xl font-bold'>{title}</h1>
			<p className='py-6 text-lg w-1/3'>{overview}</p>
			<div>
				<button className='m-2 bg-white text-black p-3 px-10 text-xl  rounded-lg hover:bg-opacity-80'>
					▶️ Play
				</button>
				<button className='m-2 bg-gray-400 text-white p-3 px-10 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-80'>
					More Info
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
