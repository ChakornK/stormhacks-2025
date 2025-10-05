// sign of deriv
export default {
  generateText(inputs) {
    return `For f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x, determine whether the function is increasing or decreasing at x = ${inputs[0].x}. Provide 1 for increasing, -1 for decreasing, 0 if derivative is 0.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = 2 * a * x + b;
    const sign = derivative > 0 ? 1 : derivative < 0 ? -1 : 0;
    return { inputs: [{ a, b, x }], solutions: [sign] };
  },
};
