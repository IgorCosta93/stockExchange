const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export default function usersScreens(state = INITIAL_STATE, action){
    switch (action.type){
        case "GET_USERS_SCREENS":
            return { ...state, loading: true }
        case "SUCCESS_GET_USERS_SCREENS":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_GET_USERS_SCREENS":
            return { data: [], loading: false, error: true }
        case "ADD_USER_SCREEN":
            return { ...state, loading: true }
        /*case "SUCCESS_ADD_USER_SCREEN":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_ADD_USER_SCREEN":
            return { data: [], loading: false, error: true }*/
        default:
            return state
    }
}