import React, { Fragment, useState, useEffect } from "react";
import { Spin } from "antd";
import AntTable from "../../common/AntTable";
import columns from "../../../const/columns/users";
import Modal from "./components/Modal";

function Users({props}){
    let [ users, setUsers ] = useState([]); 
    let [ visible, setVisible ] = useState(false); 
    let [ idUser, setIdUser ] = useState(undefined); 

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        if(props.users.data.data && users.length === 0) setUsers(users = props.users.data.data)
    }, [props.users.data])

    function getUsers(){
        let body = {
            jwt: localStorage.getItem('@Sorocaps:token')
        };
         
        props.GET_USERS(body);
    }
    
    function showPasswordModal(id){
        setIdUser(idUser = id);
        setTimeout(() => {setVisible(visible = true)},5)
    }

    return(
        <Fragment>
            <Spin spinning={props.users.loading}>
                <Modal props={props} visible={visible} setVisible={setVisible} idUser={idUser}/>
                <AntTable 
                    dataSource={users}  
                    columns={columns} 
                    new={"/"} 
                    actionItem="id"
                    btnPassword={true}
                    showPasswordModal={showPasswordModal}
                />
            </Spin>
        </Fragment>
    )
}

export default Users;