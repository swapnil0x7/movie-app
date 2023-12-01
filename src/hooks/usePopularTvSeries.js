import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularTvSeries } from '../utils/moviesSlice';

const usePopularTvSeries = () => {
	const dispatch = useDispatch();
	const popularTvSeries = useSelector((store) => store.movies.popularTvSeries);
	const getPopularTvSeries = async () => {
		const response = await fetch('https://api.themoviedb.org/3/tv/popular?page=1', API_OPTIONS);
		const data = await response.json();
		dispatch(addPopularTvSeries(data.results));
	};

	useEffect(() => {
		!popularTvSeries && getPopularTvSeries();
	}, []);
};

export default usePopularTvSeries;
