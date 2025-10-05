// product rule
export default {
  generateText(inputs) {
    return `Find the derivative of f(x) = (${inputs[0].a}x + ${inputs[0].b})(${inputs[0].c}x + ${inputs[0].d}) at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const c = Math.floor(Math.random() * 5) + 1;
    const d = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = a * (c * x + d) + c * (a * x + b);
    return {
      inputs: [{ a, b, c, d, x }],
      solutions: [parseFloat(derivative.toFixed(2))],
    };
  },
};
