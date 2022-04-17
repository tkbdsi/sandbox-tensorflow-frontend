import React from "react";

import Plot from 'react-plotly.js';

const MakePlot = ({xdata, ydata, pred}) => {
  return (
    <Plot
      data={[
        {
          x: xdata,
          y: ydata,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'blue'}
        },
        {
          x: xdata,
          y: pred,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'}
        }
      ]}
      layout={
        {
          width: 800,
          height: 800,
        }
      }
    />
  )
}

export default MakePlot;