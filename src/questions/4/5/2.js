// variance of discrete random var
export default {
  generateText(inputs) {
    return `A discrete random variable X has values ${inputs[0].values.join(
      ", "
    )} with probabilities ${inputs[0].probs.join(
      ", "
    )}. Find the variance Var(X).`;
  },
  generateValues() {
    const n = 4;
    const values = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 10) + 1
    );
    let probs = Array.from({ length: n }, () => Math.random());
    const sumP = probs.reduce((a, b) => a + b, 0);
    probs = probs.map((p) => p / sumP);
    const mean = values.reduce((sum, v, i) => sum + v * probs[i], 0);
    const Var = values.reduce(
      (sum, v, i) => sum + probs[i] * (v - mean) ** 2,
      0
    );
    return {
      inputs: [{ values, probs }],
      solutions: [parseFloat(Var.toFixed(2))],
    };
  },
};
