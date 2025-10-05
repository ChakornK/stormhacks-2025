// pearson correlation coefficient
export default {
  generateText(inputs) {
    return `A bivariate data set has paired values X = ${inputs[0].X.join(
      ", "
    )} and Y = ${inputs[0].Y.join(
      ", "
    )}. Calculate the Pearson correlation coefficient r.`;
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
      denX = 0,
      denY = 0;
    for (let i = 0; i < n; i++) {
      num += (X[i] - meanX) * (Y[i] - meanY);
      denX += (X[i] - meanX) ** 2;
      denY += (Y[i] - meanY) ** 2;
    }
    const r = num / Math.sqrt(denX * denY);
    return { inputs: [{ X, Y }], solutions: [parseFloat(r.toFixed(3))] };
  },
};
