import React from "react";
import formItemLayout from "../../const/form/formItemLayout";
import { Form, Input } from 'antd';
import { LockOutlined } from "@ant-design/icons";

function SimpleInput({ data, setData, handleInput, label, required = false,
    inputName, placeholder, width,addonBefore = "", addonAfter = "", type, disabled = false
}){
    if(type === "password"){
        return (
            <Form.Item 
                {...formItemLayout} 
                label={label} 
                style={{marginTop: 25}}
                hasFeedback 
                required={required ? required : false} 
            >
                <Input.Password 
                    value={data[inputName]} 
                    onChange={e => handleInput(e, "", data, setData)} 
                    prefix={<LockOutlined/>} 
                    placeholder={placeholder}
                    style={{width: "80%"}}
                    name={inputName}
                />
            </Form.Item>
        )
    }else return(
        <Form.Item 
            {...formItemLayout} 
            label={label} 
            style={{marginTop: 15, marginBottom: 0}}
            hasFeedback
            required={required}
        >
            <Input 
                disabled={disabled}
                addonBefore={addonBefore}
                value={data[inputName]} 
                placeholder={placeholder}
                name={inputName}
                style={ (width ? width : { width: "89%" } ) }
                onChange={e => handleInput(e, "", data, setData)}
                addonAfter={addonAfter}
            />
        </Form.Item>
    )
}

export default SimpleInput;