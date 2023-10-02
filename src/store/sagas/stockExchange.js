import { put, call } from 'redux-saga/effects';
const axios = require('axios');

function api(body, stock){
    //return axios.get(`https://brapi.dev/api/quote/ABCB4,AESB3,ALUP11,AURE3,BBAS3,BBSE3,BMGB4,BRAP4,CSAN3,CPFE3,CPLE6,CXSE3,GGBR4,KEPL3,KLBN3,PETR3,PETR4,RAIZ4,RANI3,SAPR3,TAEE11,UNIP6,VALE3?token=w5g7yL32PdY23zdf6dLiVV`,  
    return axios.get(`https://brapi.dev/api/quote/${stock}?token=w5g7yL32PdY23zdf6dLiVV`,  
        { headers: { 'Content-Type': 'application/json' }
    });
}
  
export function* getStockExchange(action){
    try{
        let ABCB4 = yield call(api, action.body, 'ABCB4');
        let AESB3 = yield call(api, action.body, 'AESB3');
        let ALUP11 = yield call(api, action.body, 'ALUP11');
        let AURE3 = yield call(api, action.body, 'AURE3');
        let BBAS3 = yield call(api, action.body, 'BBAS3');
        let BBSE3 = yield call(api, action.body, 'BBSE3');
        let BMGB4 = yield call(api, action.body, 'BMGB4');
        let BRAP4 = yield call(api, action.body, 'BRAP4');
        let CSAN3 = yield call(api, action.body, 'CSAN3');
        let CPFE3 = yield call(api, action.body, 'CPFE3');
        let CPLE6 = yield call(api, action.body, 'CPLE6');
        let CXSE3 = yield call(api, action.body, 'CXSE3');
        let GGBR4 = yield call(api, action.body, 'GGBR4');
        let JALL3 = yield call(api, action.body, 'JALL3');
        let KEPL3 = yield call(api, action.body, 'KEPL3');
        let KLBN3 = yield call(api, action.body, 'KLBN3');
        let PETR3 = yield call(api, action.body, 'PETR3');
        let PETR4 = yield call(api, action.body, 'PETR4');
        let RAIZ4 = yield call(api, action.body, 'RAIZ4');
        let RANI3 = yield call(api, action.body, 'RANI3');
        let SAPR3 = yield call(api, action.body, 'SAPR3');
        let TAEE11 = yield call(api, action.body, 'TAEE11');
        let UNIP6 = yield call(api, action.body, 'UNIP6');
        let VALE3 = yield call(api, action.body, 'VALE3');

        let stocks = [];

        ABCB4.data.results.map(s => { stocks.push(s); return null });        
        AESB3.data.results.map(s => { stocks.push(s); return null });        
        ALUP11.data.results.map(s => { stocks.push(s); return null });        
        AURE3.data.results.map(s => { stocks.push(s); return null });        
        BBAS3.data.results.map(s => { stocks.push(s); return null });        
        BBSE3.data.results.map(s => { stocks.push(s); return null });        
        BMGB4.data.results.map(s => { stocks.push(s); return null });        
        BRAP4.data.results.map(s => { stocks.push(s); return null });        
        CSAN3.data.results.map(s => { stocks.push(s); return null });        
        CPFE3.data.results.map(s => { stocks.push(s); return null });        
        CPLE6.data.results.map(s => { stocks.push(s); return null });        
        CXSE3.data.results.map(s => { stocks.push(s); return null });        
        GGBR4.data.results.map(s => { stocks.push(s); return null });        
        JALL3.data.results.map(s => { stocks.push(s); return null });        
        KEPL3.data.results.map(s => { stocks.push(s); return null });        
        KLBN3.data.results.map(s => { stocks.push(s); return null });        
        PETR3.data.results.map(s => { stocks.push(s); return null });        
        PETR4.data.results.map(s => { stocks.push(s); return null });        
        RAIZ4.data.results.map(s => { stocks.push(s); return null });        
        RANI3.data.results.map(s => { stocks.push(s); return null });        
        SAPR3.data.results.map(s => { stocks.push(s); return null });        
        TAEE11.data.results.map(s => { stocks.push(s); return null });        
        UNIP6.data.results.map(s => { stocks.push(s); return null });        
        VALE3.data.results.map(s => { stocks.push(s); return null });        

        let response = {
            config: {},
            data: { 
                results: stocks
            },
            status: 200,
            statusText: ""
        }
        
        yield put({ type: "SUCCESS_GET_STOCK_EXCHANGE", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_GET_STOCK_EXCHANGE" })
    }
}