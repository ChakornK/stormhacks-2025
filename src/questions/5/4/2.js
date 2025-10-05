// integration with constant
export default {
  generateText(inputs) {
    return `Find ∫(${inputs[0].a}x^2 + ${inputs[0].b}) dx. Provide the coefficient of x^3.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const coeffX3 = a / 3;
    return { inputs: [{ a, b }], solutions: [parseFloat(coeffX3.toFixed(2))] };
  },
};
