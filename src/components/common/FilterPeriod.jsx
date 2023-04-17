import React, { Fragment } from "react";
import { Row, Button, PageHeader, DatePicker } from "antd";
import moment from 'moment';
import { AiOutlineSearch } from "react-icons/ai";
import { PlusOutlined } from "@ant-design/icons"
import avatar from '../../img/icons/calendar.png';
const dateFormat = 'DD/MM/YYYY';

function FilterPeriod({action, handleInput, period, setPeriod, title = "Periodo", subTitle = true, addButton = false, actionAdd, hideOneDate = false}){
    let extraOptionOne = [
        <Button key="1" type="primary" shape="round" onClick={() => action(period.status)}>
            <AiOutlineSearch style={{marginRight: 5, marginTop: -2}}/>Pesquisar
        </Button>,
    ];
    let extraOptionTwo = [
        <Button key="1" type="primary" shape="round" onClick={() => action(period.status)}>
            <AiOutlineSearch style={{marginRight: 5, marginTop: -2}}/>Pesquisar
        </Button>,
        <Button key="2" type="primary" shape="round" onClick={() => actionAdd()}>
            <PlusOutlined style={{marginRight: 5, marginTop: -2}}/>Adicionar
        </Button>,
    ];

    return(
        <div style={{background: '#fff', marginTop: -20}}>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)', marginTop: 15, marginBottom: 15
                }}
                title={title}
                subTitle={
                    subTitle ? 
                        <Fragment>
                            <Row>
                                <span style={{marginTop: 5}}>Periodo </span> 
                                <DatePicker 
                                    style={{ marginRight: 10, marginLeft: 10 }}
                                    defaultValue={moment(period.begin, dateFormat)}
                                    format={dateFormat}
                                    placeholder="Inicio"
                                    onChange={e => handleInput(e, "begin", period, setPeriod)}
                                />
                                {
                                    hideOneDate ? null : 
                                    <Fragment>
                                            -
                                        <DatePicker 
                                            style={{ marginLeft: 10 }}
                                            defaultValue={moment(period.end, dateFormat)}
                                            format={dateFormat}
                                            placeholder="Fim"
                                            onChange={e => handleInput(e, "end", period, setPeriod)}
                                        />
                                    </Fragment>
                                }
                            </Row>
                        </Fragment>
                    : null
                }
                avatar={{ src: avatar }}
                extra={!addButton ? extraOptionOne : extraOptionTwo}
            >
                
            </PageHeader>
        </div>
    )
}

export default FilterPeriod;