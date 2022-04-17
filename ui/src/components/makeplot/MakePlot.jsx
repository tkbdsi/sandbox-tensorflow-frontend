import React from "react";

import Plot from 'react-plotly.js';

const MakePlot = ({xdata, ydata}) => {
  return (
    <Plot
      data={[
        {
          x: xdata,
          y: ydata,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'blue'}
        }
      ]}
      layout={
        {
          width: 400,
          height: 400,
        }
      }
    />
  )
}

export default MakePlot;