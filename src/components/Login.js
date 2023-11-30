import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMG, AVTAR } from '../utils/constants';
const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);
	const dispatch = useDispatch();
	const email = useRef();
	const password = useRef();
	const name = useRef();
	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const handleButtonClick = () => {
		// validating
		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);
		if (message) return;

		if (!isSignInForm) {
			//register user
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: AVTAR,
					})
						.then(() => {
							const { uid, email, displayName, photoURL } = auth.currentUser;
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + ' - ' + errorMessage);
				});
		} else {
			//sign-in user
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// const user = userCredential.user;
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + ' - ' + errorMessage);
				});
		}
	};

	return (
		<div>
			<Header />
			<img className='absolute filter brightness-75' src={BACKGROUND_IMG} alt='background' />
			<form
				onSubmit={(e) => e.preventDefault()}
				className='absolute w-[30%] p-14 my-32 bg-black mx-auto right-0 left-0 text-white bg-opacity-80 rounded'>
				<h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

				{!isSignInForm && (
					<input
						type='text'
						placeholder='Full Name'
						className='p-3 my-4 w-full bg-gray-800 rounded'
						ref={name}
					/>
				)}

				<input
					type='text'
					placeholder='Email'
					className='p-3 my-4 w-full bg-gray-800 rounded'
					ref={email}
				/>
				<input
					type='password'
					placeholder='Password'
					className='p-3 my-4 w-full bg-gray-800 rounded-md'
					ref={password}
				/>
				<p className='text-red-500'>{errorMessage}</p>
				<button
					type='submit'
					className='p-4 bg-red-600 w-full my-6 rounded-md'
					onClick={handleButtonClick}>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p onClick={toggleSignInForm} className='my-4 cursor-pointer hover:text-blue-600'>
					{isSignInForm ? 'New to Netflix? Sign Up now.' : 'Already a user? Sign In now.'}
				</p>
			</form>
		</div>
	);
};

export default Login;
