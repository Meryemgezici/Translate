import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constants";


export const getLanguages=createAsyncThunk("getLanguages", async()=>{
    const res=await axios.request(options);
    return res.data.data.languages;
})