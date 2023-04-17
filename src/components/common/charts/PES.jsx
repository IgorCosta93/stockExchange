import React from 'react';
import {
  Chart,
  Point,
  Line,
  Area,
  Tooltip,
  Coordinate,
  Legend
} from 'bizcharts';
import DataSet from '@antv/data-set';

/*const data = [
  { item: 'Hora Maquina', a: 70, b: 30 },
  { item: 'Insumos', a: 60, b: 70 },
  { item: 'imposto', a: 50, b: 60 },
  { item: 'Comissão', a: 40, b: 50 },
  { item: 'Custo Total', a: 100, b: 80 },
  { item: 'Venda', a: 100, b: 80 },
  { item: 'Lucro', a: 20, b: 30 },
];*/

function PES({data, fields, max, height}) {

const { DataView } = DataSet;
const dv = new DataView().source(data);
dv.transform({
    type: 'fold',
    fields: fields,
    key: 'user', 
    value: 'score', 
});

    return(
        <Chart
            height={height ? height : 400}
            data={dv.rows}
            autoFit
            scale={{
                score:{
                    min: 0,
                    max,
                }
            }}
            padding={[0, 230, 0, 0]}
            interactions={['legend-highlight']}
        >
            <Coordinate type="polar" radius={0.8} />
            <Tooltip shared />
            <Point
                position="item*score"
                color="user"
                shape="circle"
            />
            <Line
                position="item*score"
                color="user"
                size="2"
            />
            <Area
                position="item*score"
                color="user"
            />
            <Legend
                offsetX={-80}
                position="right"
            />
        </Chart>
    )
}

export default PES;