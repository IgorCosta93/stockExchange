import React, { useState, useEffect } from "react";
import { Checkbox, Form, Input, Button, Row } from 'antd';
import { LoginOutlined } from "@ant-design/icons";
import Auth from "../../../auth/Auth";
import { AiOutlineUser, AiFillLock } from "react-icons/ai";
import { openNotificationWithIcon } from "../../common/Notification";
import routes from "../../../const/routes";
import logo from '../../../img/sorocaps.png';

const userMessage = "Por favor preencha o campo usuario.";
const passwordMessage = "Por favor preencha o campo senha.";

function Login({props}){
    let [ user, setUser ] = useState({
        username: "",
        password: "",
        statusPassword: "",
        messagePassword: "",
        messageUser: "",
        statusUser: ""
    });
    let [ loading, setLoading ] = useState(false);
   
    useEffect(() => {
        if(user.username === undefined || user.username === "") return;
        if(props.login.loading) return 
       
        Auth.login(props.login,(res) => {
            if(res === "SUCCESS"){
                setTimeout(() => {
                    setUser(user = {
                        username: "",
                        password: "",
                    })
                    props.history.push(routes.HOME)
                    setLoading(loading = false);
                },3000)
                openNotificationWithIcon('success', "Sucesso", "Bem vindo!", "", 4);
            }else if(res === "ERROR"){
                openNotificationWithIcon(
                    'warning', "Aviso", 
                    "Usuario ou senha invalidos.", "", 5
                );
                setTimeout(() => {
                    setLoading(loading = false);
                },500)
            }
        });
    }, [props.login])

    function updateUsername(evt){
        if(evt.target.value === ""){
            setUser(user = {...user, 
                username: evt.target.value,
                statusUser: "error",
                messageUser: userMessage
            });
        }else{
            setUser(user = {...user, 
                username: evt.target.value,
                statusUser: "success",
                messageUser: ""
            });
        }
    }

    function updatePassword(evt){
        if(evt.target.value === ""){
            setUser(user = {...user, 
                password: evt.target.value,
                statusPassword: "error",
                messagePassword: passwordMessage
            });
        }else{
            setUser(user = {...user, 
                password: evt.target.value,
                statusPassword: "success",
                messagePassword: ""
            });
        }
    }

    function login(){
        if(user.username === "") setUser(user = {...user, statusUser: "error", messageUser: userMessage}) ;
        if(user.password === "") setUser(user = {...user, statusPassword: "error", messagePassword: passwordMessage}) ;
        if(user.username === "" || user.password === "") return null;

        const data = {
            email: user.username,
            password: user.password 
        };
        props.LOGIN_RESQUEST(data);
        setLoading(loading = true);
    }

    function keyCode(evt){
        if(evt.keyCode === 13) login() 
    }

    return(
        <header className="v-header container">
            <div className="header-overlay"></div>
            <div className="App-header">                
                <img 
                    src={logo} 
                    style={{ 
                        borderRadius: "20px", 
                        marginTop: -20,
                        marginBottom: 50,
                        width: "50vh", 
                        display: "block", 
                        marginLeft: "auto", 
                        marginRight: "auto"
                    }} 
                    alt="Logo" 
                />
                <Form 
                    className="login-form"
                >
                    <Form.Item
                        validateStatus={user.statusUser}
                        help={user.messageUser}
                        hasFeedback
                        style={{marginBottom: 0}}
                    >
                        <Input 
                            onChange={(e) => updateUsername(e)} 
                            prefix={<AiOutlineUser style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="Usuario" 
                            style={{width: "50vh"}}
                            size="large" 
                        />
                    </Form.Item>

                    <Form.Item
                        validateStatus={user.statusPassword}
                        help={user.messagePassword}
                        hasFeedback
                        style={{marginBottom: 0}}
                    >
                        <Input.Password 
                            onChange={(e) => updatePassword(e)} 
                            onKeyDown={(e) => keyCode(e)}
                            prefix={<AiFillLock style={{ color: 'rgba(0,0,0,.25)' }} />} 
                            placeholder="Senha" 
                            size="large" 
                        />
                    </Form.Item>

                    <Form.Item style={{marginBottom: 10, marginTop: -5}}>
                        <Checkbox>Lembrar-me</Checkbox>
                    </Form.Item>
                </Form>

                <Form.Item>
                    <Button 
                        style={{ width: "50vh" }} 
                        loading={loading} 
                        onClick={() => login()} 
                        type="primary"
                        icon={<LoginOutlined/>}
                        size="large"
                    >
                        Login
                    </Button>
                </Form.Item>   
            </div>
        </header>
    )
}

export default Login;