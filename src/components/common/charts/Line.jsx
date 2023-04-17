import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Label
} from "bizcharts";
import formatnumber from "../../../services/formatnumber";

function Line({data, axis, height, label = false}){
    const cols = {
        month: {
            range: [0, 1]
        }
    };
  
    return(
        <Chart height={height ? height : 400} data={data} scale={cols} autoFit padding={[50, 50, 60, 120]}>
            <Legend />
            <Axis name="month" />
            <Axis
                name="value"
                label={{
                    formatter: val => {
                        if(axis === "R$") return `${axis} ${formatnumber(val)}`
                        else return `${formatnumber(val)} ${axis ? axis : " uni"}`
                    }
                }}
            />
            <Tooltip
                useHtml
                g2-tooltip={{
                    boxShadow:'none',
                    color:'#fff',
                    backgroundColor:'#222'
                }}
                crosshairs={{
                    type: "y"
                }}
                style={{
                    color:'red'
                }}
            />
            <Geom
                type="line"
                position="month*value"
                size={2}
                color={"label"}
                shape={"smooth"}
                tooltip={[
                    'label*value',
                    (label, value) => {
                        if(axis === "R$"){
                            return {
                                name: label,
                                value: `${axis} ${formatnumber(value)}`,
                            };
                        }else{
                            return {
                                name: label,
                                value: `${formatnumber(value)} ${axis ? axis : " uni"}`,
                            };
                        }
                    },
                ]}
            >
                {/*<Label 
                    content="value"
                />*/}
            </Geom>
            <Geom
                type="point"
                position="month*value"
                size={4}
                shape={"circle"}
                color={"label"}
                style={{
                    stroke: "#fff",
                    lineWidth: 1
                }}              
            >
                {   
                    label ? 
                        <Label 
                            content='value'
                            formatter={(value, item, index)=>{
                                if(axis === "R$"){
                                    return `${axis} ${formatnumber(value)}}`;
                                }else{
                                    return `${formatnumber(value)} ${axis ? axis : " uni"}`;
                                }
                            }}
                        />
                    : null
                }
            </Geom>
        </Chart>
    )
}

export default Line;