// expected value of discrete random var
export default {
  generateText(inputs) {
    return `X has values ${inputs[0].values.join(
      ", "
    )} with probabilities ${inputs[0].probs.join(", ")}. Find E(X).`;
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
    const E = values.reduce((sum, v, i) => sum + v * probs[i], 0);
    return {
      inputs: [{ values, probs }],
      solutions: [parseFloat(E.toFixed(2))],
    };
  },
};
