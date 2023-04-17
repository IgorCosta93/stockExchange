import React from "react";
import formItemLayout from "../../const/form/formItemLayout";
import { Form, Input } from 'antd';
const { TextArea } = Input;

function InputObs({ data, setData, handleInput, label, required = false,
    inputName, placeholder, width 
}){
    return(
        <Form.Item 
            {...formItemLayout} 
            label={label} 
            style={{marginTop: 15, marginBottom: 0}}
            hasFeedback
            required={required}
        >
            <TextArea 
                value={data[inputName]} 
                placeholder={placeholder}
                name={inputName}
                style={ (width ? width : { width: "89%" } ) }
                onChange={e => handleInput(e, "", data, setData)}
                rows={4}
            />
        </Form.Item>
    )
}

export default InputObs;