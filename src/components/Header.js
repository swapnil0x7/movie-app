/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { AVTAR, LOGO } from '../utils/constants';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

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

	return (
		<div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
			<img className='w-44' src={LOGO} alt='logo' />
			{user && (
				<div className='flex'>
					<img src={AVTAR} className='w-12 h-12 m-3' alt='userIcon' />
					<button
						onClick={handleSignOut}
						className='font-bold text-white hover:underline'>
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
