import React, { Fragment } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function SideButton({action, icon}){
    return(
        <Fragment>
            <div id="settingButton">
                <Button 
                    type="primary"
                    style={{
                        fontSize: "25px", 
                        height: "50px", 
                        width: "40px", 
                        color:"white", 
                        backgroundColor:"#33aa55",
                        border: "none",
                        paddingRight: "38px",
                        paddingLeft: "-20px"
                    }} 
                    onClick={action}
                >
                {icon ? icon : <PlusOutlined/>}
                </Button>
            </div>
        </Fragment>
    )
}

export default SideButton;