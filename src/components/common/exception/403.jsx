import React from "react";
import { Button, Result } from "antd";

function Exception403(){
    return(
        <div>
            <Result
                status="403"
                title="403"
                subTitle="Você não tem autorização para acessar essa tela."
                extra={<Button type="primary">Voltar ao Inicio</Button>}
            />
        </div>
    )
}

export default Exception403;