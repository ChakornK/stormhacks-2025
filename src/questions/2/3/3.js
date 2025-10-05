// natural exp fn
export default {
  generateText(inputs) {
    return `Evaluate f(x) = e^{${inputs[0].k}x} at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const k = parseFloat((Math.random() * 2 + 1).toFixed(2));
    const x = Math.floor(Math.random() * 5) + 1;
    const result = Math.exp(k * x);
    return { inputs: [{ k, x }], solutions: [parseFloat(result.toFixed(2))] };
  },
};
