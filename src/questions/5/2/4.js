// chain rule
export default {
  generateText(inputs) {
    return `Find f'(x) for f(x) = (${inputs[0].a}x + ${inputs[0].b})^${inputs[0].n} at x = ${inputs[0].x} and determine its sign.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const n = Math.floor(Math.random() * 4) + 2;
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = n * Math.pow(a * x + b, n - 1) * a;
    const sign = derivative > 0 ? 1 : derivative < 0 ? -1 : 0;
    return {
      inputs: [{ a, b, n, x }],
      solutions: [parseFloat(derivative.toFixed(2)), sign],
    };
  },
};
