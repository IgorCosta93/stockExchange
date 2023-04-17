const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};

export default function stockExchange(state = INITIAL_STATE, action){
    switch (action.type){
        case "GET_STOCK_EXCHANGE":
            return { ...state, loading: true }
        case "SUCCESS_GET_STOCK_EXCHANGE":
            return { data: action.payload.data, loading: false, error: false }
        case "FAILURE_GET_STOCK_EXCHANGE":
            return { data: [], loading: false, error: true }
        default:
            return state
    }
}