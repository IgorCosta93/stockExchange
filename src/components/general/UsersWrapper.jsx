import React from "react";
import Users from "./usersWrapper/Users";

export default function UsersWrapper({history, users, GET_USERS, UPDATE_USER_PASSWORD}){
    let props = {
        history,
        users,
        GET_USERS,
        UPDATE_USER_PASSWORD
    };

    return <Users props={props}/>
}