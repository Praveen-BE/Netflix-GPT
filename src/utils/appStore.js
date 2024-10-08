import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import geminiReducer from "./geminiSlice";
import langReducer from "./langSlice";
import watchReducer from "./watchSlice";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gemini: geminiReducer,
        lang: langReducer,
        watch: watchReducer,
    }
});
