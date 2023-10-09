import { createSlice } from "@reduxjs/toolkit";
import { getLanguages } from "../actions/translateAction";

const initialState={
    user:[],
    isLoading:false,
}

const userSlice=createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [getLanguages.pending]: (state) => {
            state.isLoading=true;
        },

        [getLanguages.fulfilled]:(state,action)=>{
            state.user=action.payload;
        },
        [getLanguages.rejected]:(state)=>{
            state.isLoading=false;
            
        }
    }
});


export default userSlice.reducer;