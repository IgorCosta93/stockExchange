import React, { Fragment } from "react";
import { Button } from "antd";
import { CloudDownloadOutlined  } from "@ant-design/icons";

function ExcelButton({clickAction}){
    return(
        <Fragment>
            <div id="excelButton">
                <Button 
                    type="primary"
                    style={{
                        fontSize: "25px", 
                        height: "45px", 
                        width: "40px", 
                        color:"white", 
                        backgroundColor:"#33aa55",
                        border: "none",
                        paddingRight: "38px",
                        paddingLeft: "-20px"
                    }} 
                    onClick={clickAction}
                >
                    <CloudDownloadOutlined />
                </Button>
            </div>
        </Fragment>
    )
}

export default ExcelButton;