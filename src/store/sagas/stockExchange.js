import { put, call } from 'redux-saga/effects';
const axios = require('axios');

function api(body){
    return axios.get(`https://brapi.dev/api/quote/AAPL34,ABCB4,AESB3,ALUP11,AURE3,BBAS3,BBSE3,BMGB4,BRAP4,CSAN3,CPLE6,CXSE3,GGBR4,ITSA3,IRBR3,KEPL3,KLBN3,PETR3,PETR4,PINE4,RAIZ4,RANI3,SAPR3,TAEE11,UNIP6,VALE3`,  
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