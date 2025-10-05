// deriv of cubic
export default {
  generateText(inputs) {
    return `Find f'(x) for f(x) = ${inputs[0].a}x^3 + ${inputs[0].b}x^2 + ${inputs[0].c}x + ${inputs[0].d} at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 3) + 1;
    const b = Math.floor(Math.random() * 3) + 1;
    const c = Math.floor(Math.random() * 3) + 1;
    const d = Math.floor(Math.random() * 3);
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = 3 * a * Math.pow(x, 2) + 2 * b * x + c;
    return {
      inputs: [{ a, b, c, d, x }],
      solutions: [parseFloat(derivative.toFixed(2))],
    };
  },
};
