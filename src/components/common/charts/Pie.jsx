import React from 'react';
import {
  Chart,
  Interval,
  Tooltip,
  Axis,
  Coordinate,
  Legend
} from 'bizcharts';

function Pie({data, height, showLabel = true}) {
    const cols = {
        percent: {
            formatter: val => {
                val = val * 100 + '%';
                return val;
            },
        },
    };


  return (
    <Chart  height={height ? height : 400} data={data} scale={cols} autoFit>
        <Coordinate type="theta" radius={0.75} />
        <Tooltip showTitle={false} />
        <Axis visible={false} />
        <Interval
            position="percent"
            adjust="stack"
            color="item"
            style={{
                lineWidth: 4,
                stroke: '#fff',
            }}
            label={['count', {
                content: (data) => {
                    if(showLabel) return `${data.item}: ${data.percent * 100}%`;
                    else return `${data.percent * 100}%`;
                },
            }]}
        />
        <Legend
            offsetX={-30}
            position="right"
        />
    </Chart>
  );
}

export default Pie;