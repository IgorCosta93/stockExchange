import React from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar, Popover, Button } from 'antd';
import { LogoutOutlined } from "@ant-design/icons";
import { FcReading, FcHome } from "react-icons/fc";
import Auth from "../../auth/Auth";
import avatar from "../../img/icons/user.png";
import routes from "../../const/routes";
import { validScreen } from "../../services/validScreen";
import { AvatarContainer } from "./style/Sidebar";
const { Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar(){
    return(
        <Sider
            collapsed
            onBreakpoint={broken => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            style={{
                height: '100vh',
                position: 'fixed',
                left: 0,
                zIndex: 2,
                overflow: "hidden",
            }}
        >
            <Link to={routes.HOME}><div className="logo" /></Link>
            <Menu theme="dark" mode="inline">
                <Menu.Item key="1" 
                    icon={
                        <FcHome 
                            size={25} 
                            style={{marginRight: 30, marginLeft: -4, marginTop: 5}}
                        />
                    }
                >
                    <Link to={routes.HOME}>
                        Home
                    </Link>
                </Menu.Item>
                {/*
                    validScreen("REGISTRATIONS") ? 
                        <SubMenu 
                            key="sub7" 
                            icon={
                                <FcReading 
                                    size={25} 
                                    style={{marginRight: 30, marginLeft: -4, marginTop: 5}}
                                />
                            } 
                            title="Cadastros"
                        >
                            <Menu.Item key="13">
                                <Link to={routes.USUARIOS} style={{color: "white"}}>
                                    Usuarios
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Link to={routes.LIBERACAO_TELAS} style={{color: "white"}}>
                                    Usuarios Telas
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    : null                                    
                */}

                <AvatarContainer>
                    <Popover 
                        placement="rightTop" 
                        trigger="hover"
                        content={
                            <Link to={routes.LOGIN}>
                                <Button 
                                    type="link" 
                                    style={{color: "black"}}
                                    icon={<LogoutOutlined />} 
                                    onClick={() => {Auth.logout(() => {return null})}} 
                                >
                                    Sair
                                </Button>
                            </Link>
                        } 
                    >
                        <Avatar size={30} src={avatar}/>
                    </Popover>
                    
                </AvatarContainer>
            </Menu>
        </Sider>
    )
}

export default Sidebar;