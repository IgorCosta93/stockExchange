import { takeLatest } from 'redux-saga/effects';
import { login } from "./sagas/login";
import { getStockExchange } from "./sagas/stockExchange";
import { getUsers, updateUserPassword } from "./sagas/users";
import { getUsersScreens, addUserScreen } from "./sagas/usersScreens";

export default function* root() {
  yield [
    takeLatest('LOGIN_RESQUEST', login),
    takeLatest('GET_STOCK_EXCHANGE', getStockExchange),
    takeLatest('GET_USERS', getUsers),
    takeLatest('UPDATE_USER_PASSWORD', updateUserPassword),
    takeLatest('GET_USERS_SCREENS', getUsersScreens),
    takeLatest('ADD_USER_SCREEN', addUserScreen),
  ];
}
