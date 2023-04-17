const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export default function users(state = INITIAL_STATE, action){
    switch (action.type){
        case "GET_USERS":
            return { ...state, loading: true }
        case "SUCCESS_GET_USERS":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_GET_USERS":
            return { data: [], loading: false, error: true }
        case "UPDATE_USER_PASSWORD":
            return { ...state, loading: true }
        case "SUCCESS_UPDATE_USER_PASSWORD":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_UPDATE_USER_PASSWORD":
            return { data: [], loading: false, error: true }
        default:
            return state
    }
}