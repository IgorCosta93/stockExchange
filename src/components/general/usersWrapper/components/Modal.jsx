import React, { useState } from "react";
import { Button, Modal } from 'antd';
import SimpleInput from "../../../common/SimpleInput";
import { handleInput } from "../../../../services/handleInputs";
import { validForm } from "../../../../services/validForm";
import { openNotificationWithIcon } from "../../../common/Notification";
import { CloseOutlined, SaveOutlined } from "@ant-design/icons";

function UserModal({props, visible, setVisible, idUser}){
    let [ user, setUser ] = useState({
        password: undefined,
        confirmPassword: undefined
    })

    function updatePassword(){
        if(!validForm(user)){
            openNotificationWithIcon(
                'warning',"Aviso", 
                "Há informações incompletas no formulario.",
                "",5
            );
            return 
        }

        if(user.password !== user.confirmPassword){
            openNotificationWithIcon(
                'warning',"Aviso", 
                "As senhas estão diferentes.",
                "",5
            );
            return 
        }
        
        let body = {
            idUser,
            user,
            jwt: localStorage.getItem('@Sorocaps:token')
        };
    
        props.UPDATE_USER_PASSWORD(body)
        setVisible(visible = false)

        openNotificationWithIcon(
            'success',"Sucesso", 
            "Senha atualizada com sucesso.",
            "",5
        );

        setUser(user = {
            password: undefined,
            confirmPassword: undefined
        })
    }

    return (
        <Modal
            title={`Alterar Senha `}
            visible={visible}
            width={800}
            onOk={() => setVisible(visible = false)}
            onCancel={() => setVisible(visible = false)}
            footer={[
                <Button icon={<CloseOutlined/>} key="danger" type="danger" onClick={() => setVisible(visible = false)}>
                    Fechar
                </Button>,
                <Button icon={<SaveOutlined/>} key="back" type="primary" onClick={() => updatePassword()}>
                    Salvar
                </Button>
            ]}
        >
            <SimpleInput
                data={user} 
                setData={setUser} 
                handleInput={handleInput} 
                label={"Senha"}
                inputName={"password"}
                type={"password"}
                placeholder={"Digite a senha"}
            />

            <SimpleInput
                data={user} 
                setData={setUser} 
                handleInput={handleInput} 
                label={"Confirme a senha"}
                inputName={"confirmPassword"}
                type={"password"}
                placeholder={"Confirme a senha"}
            />
        </Modal>
    )
}

export default UserModal;