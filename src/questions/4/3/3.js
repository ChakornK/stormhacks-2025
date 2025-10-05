// regression line of y on x (intercept)
export default {
  generateText(inputs) {
    return `For X = ${inputs[0].X.join(", ")} and Y = ${inputs[0].Y.join(
      ", "
    )}, find the intercept of the regression line of Y on X.`;
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
    return {
      inputs: [{ X, Y }],
      solutions: [parseFloat(intercept.toFixed(3))],
    };
  },
};
