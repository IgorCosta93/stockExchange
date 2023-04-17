import React from "react";
import {
    Axis,
    Chart,
    Tooltip,
    Interval,
    Legend
} from "bizcharts";
import formatNumber from "../../../services/formatnumber";

function BarsHorizontal({ data, axis, height, padding, position = "bottom" }) {
    if(data && data.length > 0)return (
        <Chart height={height ? height : 400} data={data} autoFit padding={padding ? padding : [50, 50, 60, 120]}>
            <Interval
                adjust={[
                {
                    type: 'dodge',
                    marginRatio: 0,
                },
                ]}
                color="name"
                position="label*value"
                label={[
                    "value",
                    (xValue) => {
                    return {
                        content: formatNumber(xValue)
                      };
                    }
                ]}
            />
            <Axis 
                name="value" 
                label={{
                    formatter: val => {
                        if(axis === "R$") return `${axis} ${formatNumber(val)}`
                        else return `${formatNumber(val)} ${axis ? axis : " uni"}`
                    }
                }}
            />
            <Tooltip 
                shared 
                label={[
                    "value",
                    (xValue) => {
                    return {
                        content: formatNumber(xValue)
                      };
                    }
                ]}
            />
            <Legend position={position}/>
        </Chart>
    )
    else return null
}

export default BarsHorizontal;
