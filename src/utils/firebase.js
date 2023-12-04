// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAyUEZzZONM8eh5KneQCOkOdRToaGaMRrk',
	authDomain: 'movie-app-x07.firebaseapp.com',
	projectId: 'movie-app-x07',
	storageBucket: 'movie-app-x07.appspot.com',
	messagingSenderId: '437403638804',
	appId: '1:437403638804:web:737caa66c2a87a5f2e9b01',
	measurementId: 'G-XTVR2G8YTY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
