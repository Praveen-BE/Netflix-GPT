import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptsReducer from "./gptSlice";
import langReducer from "./langSlice";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpts: gptsReducer,
        lang: langReducer,
    }
});
