import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { CREDITS1, CREDITS2, OPTIONS_TOKEN } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { watchCreditData } from '../utils/watchSlice';

const useCreditCall = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const TOKEN = process.env.REACT_APP_TMDB_API_READ_ACCESS_TOKEN;

    const CreditApiCall = async()=>{
        const data = await fetch(CREDITS1+id+CREDITS2, OPTIONS_TOKEN(TOKEN));
        const json = await data.json();
        dispatch(watchCreditData(json));
    }

    useEffect(()=>{
        CreditApiCall();
    },[]);
}

export default useCreditCall;