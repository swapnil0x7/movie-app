import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
	name: 'movies',
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		upcomingMovies: null,
		popularTvSeries: null,
	},
	reducers: {
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addUpcomingMovies: (state, action) => {
			state.upcomingMovies = action.payload;
		},
		addPopularTvSeries: (state, action) => {
			state.popularTvSeries = action.payload;
		},
	},
});

export const {
	addNowPlayingMovies,
	addTrailerVideo,
	addPopularMovies,
	addUpcomingMovies,
	addPopularTvSeries,
} = moviesSlice.actions;

export default moviesSlice.reducer;
