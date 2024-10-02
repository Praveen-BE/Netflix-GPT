
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        backGroundPlayMovie: null,
        playingMovieData: null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcommingMovies: null
    },
    reducers: {
        addBackGroundPlayMovie: (state, action)=>{
            state.backGroundPlayMovie = action.payload;
        },
        addPlayingMovieData: (state, action)=>{
            state.playingMovieData= action.payload;
        },
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPoppularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcommingMovies: (state, action)=>{
            state.upcommingMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addPoppularMovies, addTopRatedMovies, addUpcommingMovies, addBackGroundPlayMovie, addPlayingMovieData } = moviesSlice.actions;
export default moviesSlice.reducer;