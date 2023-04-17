import React, { useEffect, useState } from "react";
import { Card, Typography, Avatar, Row, Col } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
import AESB3 from '../../../img/companies/AESB3.png';
import ALUP11 from '../../../img/companies/ALUP11.png';
import AMER3 from '../../../img/companies/AMER3.png';
import BBAS3 from '../../../img/companies/BBAS3.png';
import BBSE3 from '../../../img/companies/BBSE3.png';
import BEEF3 from '../../../img/companies/BEEF3.png';
import CIEL3 from '../../../img/companies/CIEL3.png';
import CMIN3 from '../../../img/companies/CMIN3.png';
import CPFE3 from '../../../img/companies/CPFE3.png';
import CPLE6 from '../../../img/companies/CPLE6.png';
import GGBR4 from '../../../img/companies/GGBR4.png';
import ITSA3 from '../../../img/companies/ITSA3.png';
import KEPL3 from '../../../img/companies/KEPL3.png';
import KLBN3 from '../../../img/companies/KLBN3.png';
import LEVE3 from '../../../img/companies/LEVE3.png';
import MRFG3 from '../../../img/companies/MRFG3.png';
import PETR3 from '../../../img/companies/PETR3.png';
import PETR4 from '../../../img/companies/PETR4.png';
import PSSA3 from '../../../img/companies/PSSA3.png';
import PRIO3 from '../../../img/companies/PRIO3.png';
import SAPR3 from '../../../img/companies/SAPR3.png';
import TAEE11 from '../../../img/companies/TAEE11.png';
import VALE3 from '../../../img/companies/VALE3.png';
const images = {
    AESB3: AESB3,
    ALUP11: ALUP11,
    AMER3: AMER3,
    BBAS3: BBAS3,
    BBSE3: BBSE3,
    BEEF3: BEEF3,
    CIEL3: CIEL3,
    CMIN3: CMIN3,
    CPFE3: CPFE3,
    CPLE6: CPLE6,
    GGBR4: GGBR4,
    ITSA3: ITSA3,
    KEPL3: KEPL3,
    KLBN3: KLBN3,
    LEVE3: LEVE3,
    MRFG3: MRFG3,
    PETR3: PETR3,
    PETR4: PETR4,
    PSSA3: PSSA3,
    PRIO3: PRIO3,
    SAPR3: SAPR3,
    TAEE11: TAEE11,
    VALE3: VALE3,
};

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
        <div style={{ width: "97%", height: "82vh", marginTop: 0, marginRight: -20}}>
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
                                        <Avatar shape="square" size={30} src={images[stock.symbol]} style={{ borderRadius: 5 }}/>  
                                    </div>       
                                </div>     
                                <Paragraph style={{ color: "#A6ADBB" }}>{stock.shortName}</Paragraph>  
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: -15 }}>
                                    <div style={{ textAlign: "left" }}>
                                        <Paragraph style={{ color: "#A6ADBB" }}>R$ {stock.regularMarketPrice}</Paragraph>
                                    </div>                 
                                    <div style={{ marginLeft: "auto", marginRight: 0, color: stock.regularMarketChangePercent > 0 ? "#87d068" : "#f04864" }}>
                                        { stock.regularMarketChangePercent > 0  ? <ArrowUpOutlined/> : <ArrowDownOutlined/>} {stock.regularMarketChangePercent ? stock.regularMarketChangePercent.toFixed(2) : 0} %
                                    </div>                 
                                </div>
                            </Card>
                        </Col>                
                    )
                })}
            </Row> 
        </div>
    )
}

export default Home;