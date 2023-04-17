import React from "react";
import {
  Chart,
  registerShape,
  Annotation,
  Axis,
  Tooltip,
  Interval,
  Interaction,
  Coordinate,
  Legend,
} from "bizcharts";

const sliceNumber = 0.01; 
registerShape("interval", "sliceShape", {
  draw(cfg, container) {
    const points = cfg.points;
    let path = [];
    path.push(["M", points[0].x, points[0].y]);
    path.push(["L", points[1].x, points[1].y - sliceNumber]);
    path.push(["L", points[2].x, points[2].y - sliceNumber]);
    path.push(["L", points[3].x, points[3].y]);
    path.push("Z");
    path = this.parsePath(path);
    return container.addShape("path", {
      attrs: {
        fill: cfg.color,
        path: path
      }
    });
  }
});

const data = [
  {
    type: "Polivitaminico",
    value: 2240000,
  },
  {
    type: "Oleo de Peixe",
    value: 1440000,
  },
  {
    type: "Vitamina C",
    value: 800000,
  },
  {
    type: "Propolis",
    value: 3360040,
  },
  {
    type: "Cartamo com Vitaminas",
    value: 750000,
  },
  {
    type: "A-Z Homem",
    value: 1365214,
  },
];

function Donut() {
    return (
      <Chart data={data} height={300} autoFit >
        <Coordinate type="theta" radius={0.8} innerRadius={0.75} />
        <Axis visible={false} />
        <Tooltip showTitle={true} />
        <Interval
          adjust="stack"
          position="value"
          color="type"
          shape="sliceShape"
          label={['count', {
            content: (data) => {
              return `${data.value} caps`;
            },
          }]}
        />
        <Legend position="right"/>
        <Interaction type="element-single-selected" />
        <Annotation.Text
          position={['50%', '50%']}
          content={`18.000.000`}
          style={{
            fontSize: 28,
            fill: '#262626',
            textAlign: 'center',
          }}
        />
      </Chart>
    );
}

export default Donut;