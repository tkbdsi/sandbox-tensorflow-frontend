import React from "react";

// My Components
import MakePlot from "./components/makeplot/MakePlot";

// Third Party Libraries
import * as tf from '@tensorflow/tfjs';

const makeSineFunction = () => {

  const twoPi = tf.scalar(2.0 * Math.PI);
  const xdata = tf.mul(twoPi, tf.range(-0.5,0.5,0.01));
  const ydata = tf.sin(xdata);

  return [Array.from(xdata.dataSync()), Array.from(ydata.dataSync())];
}

const App = () => {

  const [xdata, ydata] = makeSineFunction()

  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Tensorflow Sandbox</h1>
      <MakePlot xdata={xdata} ydata={ydata} />
    </main>
  );
}

export default App;
