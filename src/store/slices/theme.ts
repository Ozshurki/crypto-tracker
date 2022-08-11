import {createSlice} from "@reduxjs/toolkit";

type sliceState = {
    isDarkTheme: boolean
}

const initialState: sliceState = {
    isDarkTheme: false
};


const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.isDarkTheme = !state.isDarkTheme;
        },
    }
});

export const themeSliceActions = themeSlice.actions;

export default themeSlice;