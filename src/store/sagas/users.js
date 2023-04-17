import { put, call } from 'redux-saga/effects';
import endpoint from "../../const/backend";
const axios = require('axios');

function api(body){
    return axios.post(endpoint+"/users", body , 
        { headers: { 'Content-Type': 'application/json' }
    });
}
  
export function* getUsers(action){
    try{
        const response = yield call(api, action.body);
        yield put({ type: "SUCCESS_GET_USERS", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_GET_USERS" })
    }
}

function apiPassword(body){
    return axios.post(endpoint+"/users/updatePassword", body , 
        { headers: { 'Content-Type': 'application/json' }
    });
}
  
export function* updateUserPassword(action){
    try{
        const response = yield call(apiPassword, action.body);
        yield put({ type: "SUCCESS_UPDATE_USER_PASSWORD", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_UPDATE_USER_PASSWORD" })
    }
}