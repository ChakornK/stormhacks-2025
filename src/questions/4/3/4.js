// predict y for given x
export default {
  generateText(inputs) {
    return `Using X = ${inputs[0].X.join(", ")} and Y = ${inputs[0].Y.join(
      ", "
    )}, predict Y when X = ${inputs[0].xPred}.`;
  },
  generateValues() {
    const n = 5;
    const X = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 10) + 1
    );
    const Y = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 10) + 1
    );
    const meanX = X.reduce((a, b) => a + b, 0) / n;
    const meanY = Y.reduce((a, b) => a + b, 0) / n;
    let num = 0,
      den = 0;
    for (let i = 0; i < n; i++) {
      num += (X[i] - meanX) * (Y[i] - meanY);
      den += (X[i] - meanX) ** 2;
    }
    const slope = num / den;
    const intercept = meanY - slope * meanX;
    const xPred = Math.floor(Math.random() * 10) + 1;
    const yPred = slope * xPred + intercept;
    return {
      inputs: [{ X, Y, xPred }],
      solutions: [parseFloat(yPred.toFixed(2))],
    };
  },
};
