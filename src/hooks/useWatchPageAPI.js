import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { watchMovieData, watchMovieUnmount, watchMovieUpdate } from '../utils/watchSlice';
import { OPTIONS_TOKEN, PLAYING_DATA, WATCH_MOVIE_1, WATCH_MOVIE_2, WATCH_MOVIE_DATA1, WATCH_MOVIE_DATA2 } from '../utils/constant';
import { useParams } from 'react-router-dom';


const useWatchPageAPI = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    const TOKEN = process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN;
    const backGroundPlayMovie = async ()=>{
        const data = await fetch(WATCH_MOVIE_1+id+WATCH_MOVIE_2, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        console.log(json);
        const results = json?.results;
        const trailer = results.filter((item)=>item.type==="Trailer") || results[0];
        // console.log(trailer);
        dispatch(watchMovieUpdate(trailer[0] || trailer));
    }

    const watchPageDataAPI = async ()=>{
            const data = await fetch(WATCH_MOVIE_DATA1+id+WATCH_MOVIE_DATA2+process.env.REACT_APP_TMDB_APIKEY);
            const json = await data.json();
            // console.log(json);
            dispatch(watchMovieData(json));
    }

    useEffect(()=>{
        backGroundPlayMovie();
        watchPageDataAPI();
        return ()=>{
            dispatch(watchMovieUnmount());
        }
    },[]);
}

export default useWatchPageAPI;