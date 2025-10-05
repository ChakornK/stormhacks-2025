// normal slope
export default {
  generateText(inputs) {
    return `Find the slope of the normal to f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x + ${inputs[0].c} at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = 2 * a * x + b;
    const normalSlope = derivative !== 0 ? -1 / derivative : 0; // vertical line → slope 0
    return {
      inputs: [{ a, b, c, x }],
      solutions: [parseFloat(normalSlope.toFixed(2))],
    };
  },
};
