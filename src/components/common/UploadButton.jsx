import React, { Fragment } from "react";
import { InboxOutlined  } from '@ant-design/icons';

function UploadButton(){
    return (
        <Fragment>
            <InboxOutlined style={{fontSize: 15}} />
            <div className="ant-upload-text">Upload</div>
        </Fragment>
    )
}

export default UploadButton;