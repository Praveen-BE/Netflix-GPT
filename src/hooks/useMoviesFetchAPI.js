import { useEffect } from "react";
import { BG_PLAY_MOVIES, NOW_PLAYING_API, OPTIONS_TOKEN, PLAYING_DATA, POPULAR_API, TOP_RATED_API, UPCOMMING_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addBackGroundPlayMovie, addNowPlayingMovies, addPlayingMovieData, addPoppularMovies, addTopRatedMovies, addUpcommingMovies } from "../utils/moviesSlice";

const useMoviesFetchAPI = () => {
    const dispatch = useDispatch();
    const backPlayMovieStore = useSelector((store)=>store.movies.backGroundPlayMovie);
    const playMovieDataStore = useSelector((store)=>store.movies.playingMovieData);
    const nowPlayDataStore = useSelector((store)=>store.movies.nowPlayingMovies);
    const popularDataStore = useSelector((store)=>store.movies.popularMovies);
    const topDataStore = useSelector((store)=>store.movies.topRatedMovies);
    const upCommingStore = useSelector((store)=>store.movies.upcommingMovies);

    const TOKEN = process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN;

    const backGroundPlayMovie = async ()=>{
        const data = await fetch(BG_PLAY_MOVIES, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        // console.log(json);
        const results = json?.results;
        const trailer = results.filter((item)=>item.type==="Trailer") || results[0];
        // console.log(trailer);
        dispatch(addBackGroundPlayMovie(trailer[0].key || trailer.key));
    }

    const playingMovieData = async ()=>{
        const data = await fetch(PLAYING_DATA+process.env.REACT_APP_TMDB_APIKEY);
        const json = await data.json();
        // console.log(json);
        dispatch(addPlayingMovieData(json));
    }
    
    const nowPlayingFetch = async()=>{
        const data = await fetch(NOW_PLAYING_API, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        const resultsdata = json?.results;
        // console.log(resultsdata);
        dispatch(addNowPlayingMovies(resultsdata));
    }

    const popularFetch = async()=>{
        const data = await fetch(POPULAR_API, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        const resultsdata = json?.results;
        dispatch(addPoppularMovies(resultsdata));
    }

    const topRatedFetch = async()=>{
        const data = await fetch(TOP_RATED_API, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        const resultsdata = json?.results;
        dispatch(addTopRatedMovies(resultsdata));
    }

    const upcommingFetch = async()=>{
        const data = await fetch(UPCOMMING_API, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        const resultsdata = json?.results;
        dispatch(addUpcommingMovies(resultsdata));
    }

    useEffect(()=>{
        if(!backPlayMovieStore) backGroundPlayMovie();
        if(!playMovieDataStore) playingMovieData();
        if(!nowPlayDataStore) nowPlayingFetch();
        if(!popularDataStore) popularFetch();
        if(!topDataStore) topRatedFetch();
        if(!upCommingStore) upcommingFetch();
    },[]);

}

export default useMoviesFetchAPI;