
import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: "gemini",
    initialState: {
        showGeminiSearch : false,
        geminiSearchMovies : null,
        geminiTmdbSearchMovies : null,
    },
    reducers: {
        toggleGeminiSearch : (state, action)=>{
            state.showGeminiSearch = !state.showGeminiSearch;
        },
        geminiSearchStore : (state, action)=>{
            state.geminiSearchMovies = action.payload;
        },
        geminiTmdbSearchStore : (state, action)=>{
            state.geminiTmdbSearchMovies = action.payload;
        },
        unMountGeminiReset : (state)=>{
            state.geminiSearchMovies = null;
            state.geminiTmdbSearchMovies = null;
        }
    }
});

export const { toggleGeminiSearch, geminiSearchStore, geminiTmdbSearchStore, unMountGeminiReset } = geminiSlice.actions;
export default geminiSlice.reducer;