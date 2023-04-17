import React, { useState, useEffect } from "react";
import Users from "../../common/selects/Users";
import routes from "../../../const/routes";
import { PageHeader, Checkbox, Row } from "antd";
import { openNotificationWithIcon } from "../../common/Notification";
import avatar from '../../../img/system.png';

function UsersScreens({props}){
    let [ user, setUser ] = useState({
        userID: undefined,
        routes: []
    });
    
    useEffect(() => {
        let userRoutes = [];

        for (var key in routes) {
            if (routes.hasOwnProperty(key)) {
                userRoutes.push({
                    _id: key,
                    name: key,
                    checked: false,
                })
            }
        }
     
        if(userRoutes.length > 0 && user.routes.length === 0) setUser(user = {...user, routes: userRoutes})
    },[])

    function cleanRoutes(){
        let userRoutes = user.routes.slice();
        userRoutes.map(userScreen => {
            userScreen.checked = false
            return null
        })
     
        setUser(user = {...user, routes: userRoutes})
    }
    
    useEffect(() => {
        if(props.screens.data && props.screens.data.data && !props.screens.loading){
            let userRoutes = user.routes.slice();
           
            props.screens.data.data.map(screen => {
                userRoutes.map(userScreen => {
                    if(screen.tela === userScreen.name) userScreen.checked = true
                    return null
                })
                return null
            })
            setUser(user = {...user, routes: userRoutes})
        }
    }, [props.screens])

    function getUserScreens(e){
        cleanRoutes();
        setUser(user = {...user, userID: e})
        let body = {
            jwt: localStorage.getItem('@Sorocaps:token'),
            user: e 
        };
     
        props.GET_USERS_SCREENS(body)
    }

    function addScreen(e){

        if(user.userID === undefined){
            openNotificationWithIcon('warning', "Aviso", "Selecione um usuario antes de adicionar uma tela!", "", 4);
            return 
        }

        let body = {
            jwt: localStorage.getItem('@Sorocaps:token'),
            screen: e.target.value, 
            user: user.userID
        };
        
        let userRoutes = user.routes.slice();
        userRoutes.map(userScreen => {
            if(userScreen.name === e.target.value) userScreen.checked = !userScreen.checked
            return null
        })

        setUser(user = {...user, routes: userRoutes})

        props.ADD_USER_SCREEN(body);
    }
 
    return(
        <div
            style={{
                background: '#fff', 
                padding: 24, 
                marginRight: 20,  
                minHeight: "auto" 
            }}
        >
            <Users data={user} setData={setUser} type="ACTION" action={getUserScreens}/>

            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)', marginTop: 15, marginBottom: 15
                }}
                title="Telas"
                avatar={{ src: avatar }}
            >
                {
                    user.routes.map(route => {
                        return(
                            <Row key={route._id}>
                                <Checkbox 
                                    checked={route.checked}
                                    onChange={e => addScreen(e)}
                                    value={route.name}
                                >
                                    {route.name}
                                </Checkbox>
                            </Row>
                        )
                    })
                }
            </PageHeader>
        </div>
    )
}

export default UsersScreens;