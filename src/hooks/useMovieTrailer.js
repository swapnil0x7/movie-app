import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch();

	const getMovieVideos = async () => {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			API_OPTIONS
		);

		const data = await response.json();
		const filteredvideos = data.results.filter((movie) => movie.type === 'Trailer');
		const trailer = filteredvideos.length ? filteredvideos[0] : data.results[0];
		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getMovieVideos();
	}, []);
};

export default useMovieTrailer;
