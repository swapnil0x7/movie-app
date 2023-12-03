import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
	name: 'gpt',
	initialState: {
		showGptSearch: false,
		movieResults: null,
		movieNames: null,
	},
	reducers: {
		toggleGptSearchView: (state) => {
			state.showGptSearch = !state.showGptSearch;
		},
		addGptMovieResult: (state, action) => {
			const { movieResults, movieNames } = action.payload;
			state.movieResults = movieResults;
			state.movieNames = movieNames;
		},
		directToHomePage: (state) => {
			state.showGptSearch = false;
		},
	},
});

export const { toggleGptSearchView, addGptMovieResult, directToHomePage } = gptSlice.actions;

export default gptSlice.reducer;
