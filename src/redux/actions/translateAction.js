import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../../utils/constants";


export const getLanguages = createAsyncThunk("getLanguages", async () => {
    const res = await axios.request(options);
    const data = res.data.data.languages;
    const newData = data.map((language) => ({
        value: language.code,
        label: language.name
    })


    );
    

    return newData;
});


export const textTranslate = createAsyncThunk("textTranslate", async (params) => {
    
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', params.sourceLang.value
    );
    encodedParams.set('target_language', params.targetLang.value
    );
    encodedParams.set('text', params.text);

    const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'c4d2c164ffmsh510cbdef570ef2dp181b1fjsn87198d572be6',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: encodedParams,
    };

    const res= await axios.request(options);

    return res.data.data.translatedText;
})