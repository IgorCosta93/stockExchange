import { put, call } from 'redux-saga/effects';
import endpoint from "../../const/backend";
const axios = require('axios');

function apiLogin(body){
    return axios.post(endpoint+"/users/authenticate", body , 
        {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}
  
export function* login(action){
    try{
        const response = yield call(apiLogin, action.body);
        yield put({ type: "SUCCESS_LOGIN", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_LOGIN", payload: { data: err } });
    }
}