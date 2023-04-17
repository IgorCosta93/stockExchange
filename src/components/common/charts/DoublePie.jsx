import React from "react";
import {
    Chart,
    Interval,
    Tooltip,
    Legend,
    View,
    Axis,
    Coordinate
} from 'bizcharts';
import { DataView } from '@antv/data-set';

function DoublePie() {
    const data = [
        { value: 251, type: 'limite', name: 'lab' },
        { value: 1048, type: 'limite', name: 'uni' },
        { value: 610, type: 'limite', name: 'sor' },
        { value: 434, type: 'limite', name: 'hen' },
        { value: 335, type: 'limite', name: 'med' },
        { value: 250, type: 'limite', name: 'ultra' },
    ];
    // 通过 DataSet 计算百分比
    const dv = new DataView();
    dv.source(data).transform({
        type: 'percent',
        field: 'value',
        dimension: 'type',
        as: 'percent',
    });
    
    const dv1 = new DataView();
    dv1.source(data).transform({
        type: 'percent',
        field: 'value',
        dimension: 'name',
        as: 'percent',
    });
  
  
    return (
        <Chart
            height={400}
            data={dv.rows}
            autoFit
            scale={{
                percent: {
                    formatter: (val) => {
                        val = (val * 100).toFixed(2) + '%';
                        return val;
                    },
                }
            }}
        >
            <Coordinate type="theta" radius={0.5} />
            <Axis visible={false} />
            <Legend visible={false} />
            <Tooltip showTitle={false} />
            <Interval
                position="percent"
                adjust="stack"
                color="type"
                element-highlight
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}
                label={['type', {
                    offset: -15,
                }]}
            />
            <View data={dv1.rows}>
                <Coordinate type="theta" radius={0.75} innerRadius={0.5 / 0.75} />
                <Interval
                    position="percent"
                    adjust="stack"
                    color={['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']]}
                    element-highlight
                    style={{
                        lineWidth: 1,
                        stroke: '#fff',
                    }}
                    label="name"
                />
            </View>
        </Chart>
    );
}
  
export default DoublePie;