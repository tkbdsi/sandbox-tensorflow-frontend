import React from "react";

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

  console.log(xdata);

  return (
    <main>
      <h1>Tensorflow Sandbox</h1>
    </main>
  );
}

export default App;
