import React from "react";
import UsersScreens from "./usersScreensWrapper/UsersScreens";

export default function UsersScreensWrapper({history, screens, GET_USERS_SCREENS, ADD_USER_SCREEN }){
    let props = {
        history,
        screens,
        GET_USERS_SCREENS,
        ADD_USER_SCREEN
    };

    return <UsersScreens props={props}/>
}