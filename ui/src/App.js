import React, {useState, useEffect} from "react";

// My Components
import MakePlot from "./components/makeplot/MakePlot";

// Third Party Libraries
import * as tf from '@tensorflow/tfjs';

const makeSineFunction = (xvals) => tf.sin(xvals);

const App = () => {

  const [c0, setC0] = useState(0);
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [pred, setPred] = useState(0);
  const [cost, setCost] = useState([]);

  const twoPi = tf.scalar(2.0 * Math.PI);
  const xdata = tf.mul(twoPi, tf.range(-0.5,0.5,0.01));

  const ydata = makeSineFunction(xdata);

  const C0 = tf.scalar(Math.random() - 0.5).variable();
  const C1 = tf.scalar(Math.random() - 0.5).variable();
  const C2 = tf.scalar(Math.random() - 0.5).variable();
  const C3 = tf.scalar(Math.random() - 0.5).variable();

  const f = (x) => C2.mul(x).mul(x).add(C1).mul(x).add(C0);

  const loss = (pred, label) => pred.sub(label).square().mean();
  const learningRate = 0.1;
  const optimizer = tf.train.adam(learningRate);
  let losses = [];

  useEffect( () => {
    for (let i = 0; i < 100; i++) {
      const l = optimizer.minimize( () => loss(f(xdata), ydata), true);
      setCost(cost => [...cost,l.dataSync()[0]]);
    }
  },[])

  useEffect( () => {
    console.log(cost);
    setC0(C0.dataSync()[0]);
    setC1(C1.dataSync()[0]);
    setC2(C2.dataSync()[0]);
    setC3(C3.dataSync()[0]);
    let y = Array.from(xdata.dataSync()).map( val => c3*val*val*val + c2*val*val + c1*val + c0);
    setPred(y);
  },[cost]);

  return (
    <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Tensorflow Sandbox</h1>
      <h3>Cost {cost.strides}</h3>
      <MakePlot xdata={Array.from(xdata.dataSync())} ydata={Array.from(ydata.dataSync())} pred={pred} />
    </main>
  );
}

export default App;
