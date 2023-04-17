import { put, call } from 'redux-saga/effects';
const axios = require('axios');

function api(body){
    return axios.get(`https://brapi.dev/api/quote/AESB3,ALUP11,AMER3,BBAS3,BBSE3,BEEF3,CIEL3,CMIN3,CPFE3,CPLE6,GGBR4,ITSA3,KEPL3,KLBN3,LEVE3,MRFG3,PETR3,PETR4,PSSA3,PRIO3,SAPR3,TAEE11,VALE3`,  
        { headers: { 'Content-Type': 'application/json' }
    });
}
  
export function* getStockExchange(action){
    try{
        const response = yield call(api, action.body);
        yield put({ type: "SUCCESS_GET_STOCK_EXCHANGE", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_GET_STOCK_EXCHANGE" })
    }
}