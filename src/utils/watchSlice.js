import { createSlice } from "@reduxjs/toolkit";

const watchSlice = createSlice({
    name: "watch",
    initialState: {
        watchMovieStore : null,
        watchMovieData : null,
        watchCreditData : null,
    },
    reducers: {
        watchMovieUpdate : (state, action)=>{
            state.watchMovieStore = action.payload;
        },
        watchMovieUnmount : (state)=>{
            state.watchMovieStore = null;
            state.watchMovieData = null;
            state.watchCreditData = null;
        },
        watchMovieData : (state, action)=>{
            state.watchMovieData = action.payload;
        },
        watchCreditData : (state, action)=>{
            state.watchCreditData = action.payload;
        }
    }
});

export const { watchMovieUpdate, watchMovieUnmount, watchMovieData, watchCreditData } = watchSlice.actions;
export default watchSlice.reducer;