export function GET_USERS(body = {}) {
    return {
        type: "GET_USERS",
        body
    };
};

export function UPDATE_USER_PASSWORD(body = {}) {
    return {
        type: "UPDATE_USER_PASSWORD",
        body
    };
};