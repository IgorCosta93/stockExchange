import { put, call } from 'redux-saga/effects';
import endpoint from "../../const/backend";
const axios = require('axios');

function api(body){
    return axios.post(endpoint+"/user/screens", body , 
        { headers: { 'Content-Type': 'application/json' }
    });
}
  
export function* getUsersScreens(action){
    try{
        const response = yield call(api, action.body);
        yield put({ type: "SUCCESS_GET_USERS_SCREENS", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_GET_USERS_SCREENS" })
    }
}

function apiAdd(body){
    return axios.post(endpoint+"/user/addScreen", body , 
        { headers: { 'Content-Type': 'application/json' }
    });
}
  
export function* addUserScreen(action){
    try{
        const response = yield call(apiAdd, action.body);
        yield put({ type: "SUCCESS_ADD_USER_SCREEN", payload: { data: response } });
    }catch(err){
        yield put({ type: "FAILURE_ADD_USER_SCREEN" })
    }
}
