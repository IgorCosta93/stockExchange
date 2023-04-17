import React from "react";
import Home from "./homeWrapper/Home";

export default function HomeWrapper({history, stockExchange, GET_STOCK_EXCHANGE}){
    let props = {
        history,
        stockExchange,
        GET_STOCK_EXCHANGE,
    };

    return <Home props={props}/>
}