// derivative
export default {
  generateText(inputs) {
    return `Find the derivative of f(x) = ${inputs[0].a}x^${inputs[0].n} at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const n = Math.floor(Math.random() * 4) + 2;
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = a * n * Math.pow(x, n - 1);
    return {
      inputs: [{ a, n, x }],
      solutions: [parseFloat(derivative.toFixed(2))],
    };
  },
};
