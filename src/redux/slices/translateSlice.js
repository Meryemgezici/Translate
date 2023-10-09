import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions/translateAction";

const initialState = {
    isLoading: true,
    isError: false,
    languages: [],
}


const translateSlice=createSlice({
    name: "languages",
    initialState,
    extraReducers: {
        [getLanguages.pending]: (state) => {
            state.isLoading=true;
        },

        [getLanguages.fulfilled]:(state,action)=>{
            state.languages=action.payload;
        },
        [getLanguages.rejected]:(state)=>{
            state.isLoading=false;
            state.isError=true;
        }
    }

});


export default translateSlice.reducer;


