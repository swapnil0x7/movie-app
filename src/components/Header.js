/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVTAR, LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { directToHomePage, toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSLice';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate('/error');
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
				navigate('/browse');
			} else {
				dispatch(removeUser());
				navigate('/');
			}
		});

		// unsubscribe 'onAuthStateChange' whenever my header un-mounts
		return () => unsubscribe();
	}, []);

	const handleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
		<div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row'>
			<img
				onClick={() => dispatch(directToHomePage())}
				className='w-44 mx-auto md:mx-0 cursor-pointer'
				src={LOGO}
				alt='logo'
			/>
			{user && (
				<div className='flex justify-between'>
					{showGptSearch && (
						<select
							onChange={handleLanguageChange}
							className='px-4 m-4 bg-gray-800 text-white rounded md:rounded-lg appearance-none hover:bg-red-500'>
							{SUPPORTED_LANGUAGES.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}
					<button
						onClick={handleGptSearchClick}
						className='px-4 mx-4 my-4 bg-blue-600 rounded md:rounded-lg text-white md:font-semibold hover:bg-white hover:text-black'>
						{showGptSearch ? 'Browse' : 'GPT Search'}
					</button>
					<img src={AVTAR} className='hidden md:block w-12 h-12 m-3' alt='userIcon' />
					<button
						onClick={handleSignOut}
						className=' w-24 h-10 my-4 bg-gray-800 md:bg-opacity-0 text-sm md:text-base md:font-bold text-white hover:underline rounded md:rounded-none'>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
