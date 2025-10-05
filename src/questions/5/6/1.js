// deriv at point
export default {
  generateText(inputs) {
    return `For f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x + ${inputs[0].c}, determine f'(x) at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = 2 * a * x + b;
    return {
      inputs: [{ a, b, c, x }],
      solutions: [parseFloat(derivative.toFixed(2))],
    };
  },
};
