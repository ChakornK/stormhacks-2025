// reverse chain rule
export default {
  generateText(inputs) {
    return `Find the coefficient of x in ∫ ${inputs[0].a}(${inputs[0].b}x + ${inputs[0].c})^2 dx.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 3) + 1;
    const c = Math.floor(Math.random() * 5);
    const coefficient = a / (2 + 1) / b;
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(coefficient.toFixed(2))],
    };
  },
};
