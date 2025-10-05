// chain rule
export default {
  generateText(inputs) {
    return `Compute the derivative of f(x) = (${inputs[0].a}x + ${inputs[0].b})^2 at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = 2 * (a * x + b) * a;
    return {
      inputs: [{ a, b, x }],
      solutions: [parseFloat(derivative.toFixed(2))],
    };
  },
};
