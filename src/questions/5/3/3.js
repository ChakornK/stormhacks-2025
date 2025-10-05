// optimization (min/max)
export default {
  generateText(inputs) {
    return `Find the x-coordinate of the maximum or minimum of f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x + ${inputs[0].c} and state if it is maximum (-1) or minimum (1).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 5);
    const xVertex = -b / (2 * a);
    const type = a > 0 ? 1 : a < 0 ? -1 : 0;
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(xVertex.toFixed(2)), type],
    };
  },
};
