import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name: "lang",
    initialState: {
        language: "en",
    },
    reducers : {
        langChange : (state, action)=>{
            state.language = action.payload;
        }
    }
});

export const { langChange } = langSlice.actions;
export default langSlice.reducer;