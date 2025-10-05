// power rule
export default {
  generateText(inputs) {
    return `Find the derivative of f(x) = ${inputs[0].a}x^${inputs[0].n} at x = ${inputs[0].x} and determine if f(x) is increasing (1), decreasing (-1), or stationary (0).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const n = Math.floor(Math.random() * 5) + 1;
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = a * n * Math.pow(x, n - 1);
    const sign = derivative > 0 ? 1 : derivative < 0 ? -1 : 0;
    return {
      inputs: [{ a, n, x }],
      solutions: [parseFloat(derivative.toFixed(2)), sign],
    };
  },
};
