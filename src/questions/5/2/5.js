// second deriv
export default {
  generateText(inputs) {
    return `For f(x) = ${inputs[0].a}x^3 + ${inputs[0].b}x^2 + ${inputs[0].c}x + ${inputs[0].d}, find f''(x) at x = ${inputs[0].x} and state its sign (1 for concave up, -1 for concave down, 0 for inflection).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 3) + 1;
    const b = Math.floor(Math.random() * 3) - 1;
    const c = Math.floor(Math.random() * 3) - 1;
    const d = Math.floor(Math.random() * 3);
    const x = Math.floor(Math.random() * 5) + 1;
    const secondDerivative = 6 * a * x + 2 * b;
    const sign = secondDerivative > 0 ? 1 : secondDerivative < 0 ? -1 : 0;
    return {
      inputs: [{ a, b, c, d, x }],
      solutions: [parseFloat(secondDerivative.toFixed(2)), sign],
    };
  },
};
