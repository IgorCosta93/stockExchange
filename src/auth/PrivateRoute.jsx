import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import Sidebar from "../components/common/Sidebar";
import Auth from "./Auth";
import Unauthorized from "../components/common/exception/403";
//import { validScreen } from "../services/validScreen"
const { Content } = Layout;

export const PrivateRoute = ({
    component: Component,
    breadcrumb: Breadcrumbs,
    breadcrumbSub: BreadcrumbSub,
    pathB: Path,
    icon: Icon,
    auth: AuthScreen,
    ...rest
}) => {
    return(
        <Route
            {...rest}
            render={props => {
                //if (Auth.isAuthenticated()){
                if (true){
                    return (
                        <Layout style={{ minHeight: '100vh' }}>
                            {/*<Sidebar/>*/}
                            <Layout>                                
                                <Breadcrumb style={{ marginTop: 20, marginLeft: 30 }}>
                                    { Path ? 
                                            <Breadcrumb.Item>
                                                <Icon style={{marginRight: 10, fontSize: 15}}/>
                                                <span>
                                                    <Link to={Path}>
                                                        {Breadcrumbs}
                                                    </Link>
                                                </span>
                                            </Breadcrumb.Item>
                                        : 
                                            <Breadcrumb.Item>
                                                <Icon style={{marginRight: 10, fontSize: 15}}/>
                                                <span>
                                                    {Breadcrumbs}
                                                </span>
                                            </Breadcrumb.Item>
                                    }
                                    
                                    { BreadcrumbSub ? <Breadcrumb.Item><span>{BreadcrumbSub}</span></Breadcrumb.Item> : null }
                                </Breadcrumb>
                                
                                <Content 
                                    style={{
                                        //background: '#fff', 
                                        padding: 24, 
                                        marginTop:0,
                                        marginRight: 0, 
                                        marginLeft: 10, 
                                        marginBottom: 20, 
                                        minHeight: "auto" 
                                    }}
                                >
                                    <Component {...props}/>
                                    {/*
                                        validScreen(AuthScreen) ? 
                                            <Component {...props}/>
                                        : 
                                            <Unauthorized/>                                    
                                    */} 
                                </Content>
                            </Layout>
                        </Layout>
                    );
                }else{
                    return(
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                } 
            }}
        />
    )
}