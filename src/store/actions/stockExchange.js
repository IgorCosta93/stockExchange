export function GET_STOCK_EXCHANGE(body = {}) {
    return {
        type: "GET_STOCK_EXCHANGE",
        body
    };
}