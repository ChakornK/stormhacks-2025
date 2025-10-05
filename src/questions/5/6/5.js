// tangent slope
export default {
  generateText(inputs) {
    return `Find the slope of the tangent to f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const x = Math.floor(Math.random() * 5) + 1;
    const slope = 2 * a * x + b;
    return { inputs: [{ a, b, x }], solutions: [parseFloat(slope.toFixed(2))] };
  },
};
