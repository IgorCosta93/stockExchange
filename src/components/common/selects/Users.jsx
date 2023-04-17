import React, { useEffect } from "react";
import { Select } from "antd";
import { connect } from 'react-redux';
import { GET_USERS } from '../../../store/actions/users';
const { Option } = Select;

function Users({users, GET_USERS, data, setData, type, action}){
    useEffect(() => {
        let body = {
            jwt: localStorage.getItem('@Sorocaps:token')
        };

        GET_USERS(body)
    }, []);

    function onChange(e){
        setData(data = {...data, userID: e})
        if(type === "ACTION") action(e)
    }
  
    return(
        <div style={{paddingTop: 15, paddingLeft: 15}}>
            <span>Selecione um Usuario</span>
            <Select
                showSearch
                style={{ width: "70%", paddingLeft: 15 }}
                placeholder="Selecione um Usuario"
                optionFilterProp="children"
                onChange={e => onChange(e)}
                value={data.userID}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    users.data.data && users.data.data.map(user => {
                        return <Option key={user.id} value={user.id}>{user.nome}</Option>
                    })
                }
            </Select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.usersR
    };
};

const mapDispatchToProps = dispatch => {
    return {
        GET_USERS: body => dispatch(GET_USERS(body)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);