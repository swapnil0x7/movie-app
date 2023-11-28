import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<img
				className='absolute'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt='background'
			/>
			<form className='absolute w-3/12 p-12 bg-black mx-auto right-0 left-0 text-white bg-opacity-80 my-40'>
				<h1 className='font-bold text-3xl py-4'>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				{!isSignInForm && (
					<input
						type='text'
						placeholder='Full Name'
						className='p-3 my-4 w-full bg-gray-800 rounded-md'
					/>
				)}

				<input
					type='text'
					placeholder='Email'
					className='p-3 my-4 w-full bg-gray-800 rounded-md'
				/>
				<input
					type='password'
					placeholder='Password'
					className='p-3 my-4 w-full bg-gray-800 rounded-md'
				/>
				<button
					type='submit'
					className='p-4 bg-red-600 w-full my-6 rounded-md'>
					Sign In
				</button>
				<p
					onClick={toggleSignInForm}
					className='my-4 cursor-pointer hover:underline hover:text-blue-500'>
					{isSignInForm
						? 'New to Netflix? Sign Up now.'
						: 'Already a user? Sign In now.'}
				</p>
			</form>
		</div>
	);
};

export default Login;
