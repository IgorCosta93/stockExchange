import React, { useEffect, useState } from "react";
import { Card, Typography, Avatar, Row, Col, Spin } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;

function Home({props}){    
    let [ stocks, setStocks ] = useState([]);

    useEffect(() => {
        getStockExchange()
    },[])

    useEffect(() => {
        if(props.stockExchange.data && props.stockExchange.data.data && props.stockExchange.data.data.results){
            setStocks(props.stockExchange.data.data.results)
        }
    },[props.stockExchange])

    function getStockExchange(){
        props.GET_STOCK_EXCHANGE()
    }
    
    return(
        <div style={{ width: "97%", height: "82vh", marginTop: -20, marginRight: -20}}>
            <Spin spinning={props.stockExchange.loading}>
                <Row>
                    {stocks.map(stock => {
                        return(
                            <Col xs={24} sm={6} md={6} lg={6} xl={4} style={{ marginTop: 15 }}>
                                <Card style={{ width: "95%", borderRadius: 15, backgroundColor: "#20252E" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                                        <div style={{ textAlign: "left" }}>
                                            <Title style={{ color: "#A6ADBB" }} level={3}>{stock.symbol}</Title>
                                        </div>
                                        <div style={{ marginLeft: "auto", marginRight: 0 }}>
                                            <Avatar shape="square" size={30} src={stock.logourl} style={{ borderRadius: 5 }}/>  
                                        </div>       
                                    </div>     
                                    <Paragraph style={{ color: "#A6ADBB", marginTop: -5 }}>{stock.shortName}</Paragraph>  
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: -15, marginTop: -5 }}>
                                        <div style={{ textAlign: "left" }}>
                                            <Paragraph style={{ color: "#A6ADBB" }}>R$ {stock.regularMarketPrice}</Paragraph>
                                        </div>                 
                                        <div style={{ marginLeft: "auto", marginRight: 0, color: stock.regularMarketChangePercent > 0 ? "#87d068" : "#f04864" }}>
                                            { stock.regularMarketChangePercent > 0  ? <ArrowUpOutlined/> : <ArrowDownOutlined/>} {stock.regularMarketChangePercent ? stock.regularMarketChangePercent.toFixed(2) : 0} %
                                        </div>                 
                                    </div>
                                    <Paragraph style={{ color: "#fcfffc", marginTop: 5, marginBottom: -8 }}>Range: {stock.fiftyTwoWeekRange}</Paragraph>  
                                </Card>
                            </Col>                
                        )
                    })}
                </Row> 
            </Spin>
        </div>
    )
}

export default Home;