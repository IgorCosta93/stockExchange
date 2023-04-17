export function GET_USERS_SCREENS(body = {}) {
    return {
        type: "GET_USERS_SCREENS",
        body
    };
};

export function ADD_USER_SCREEN(body = {}) {
    return {
        type: "ADD_USER_SCREEN",
        body
    };
};