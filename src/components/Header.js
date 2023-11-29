import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				navigate('/error');
			});
	};

	return (
		<div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
			<img
				className='w-44'
				src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
				alt='logo'
			/>
			{user && (
				<div className='flex'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
						className='w-12 h-12 m-3'
						alt='userIcon'
					/>
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
