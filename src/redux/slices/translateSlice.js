import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, textTranslate } from "../actions/translateAction";

const initialState = {
    isLoading: true,
    isError: false,
    languages: [],
    // translate
    isTransLoading:true,
    isTransError:false,
    translate:"",
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
            state.isLoading=false;
            state.isError=false;
        },
        [getLanguages.rejected]:(state)=>{
            state.isLoading=false;
            state.isError=true;
        },

        [textTranslate.pending]:(state)=>{
            state.isTransLoading=true;
        },
        [textTranslate.fulfilled]:(state,action)=>{
            state.translate=action.payload;
            state.isTransLoading=false;
            state.isTransError=false;
        },

        [textTranslate.rejected]:(state)=>{
            state.isTransLoading=false;
            state.isTransError=true;
        },
    },

    reducers:{
        clearTranslate:(state)=>{
            state.translate="";
        },
    },
    
});


export default translateSlice.reducer;

export const clearTranslate =translateSlice.actions.clearTranslate;
