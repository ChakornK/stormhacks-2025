// indefinite integral coeff
export default {
  generateText(inputs) {
    return `Find the coefficient of x^${inputs[0].n + 1} in ∫ ${inputs[0].a}x^${
      inputs[0].n
    } dx.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const n = Math.floor(Math.random() * 4) + 1;
    const coefficient = a / (n + 1);
    return {
      inputs: [{ a, n }],
      solutions: [parseFloat(coefficient.toFixed(2))],
    };
  },
};
