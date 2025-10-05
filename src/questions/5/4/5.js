// indef integral of exp
export default {
  generateText(inputs) {
    return `Find ∫${inputs[0].a}e^(${inputs[0].b}x) dx. Provide the coefficient of e^(${inputs[0].b}x) in the integrated expression.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 4) + 1;
    const coefficient = a / b;
    return {
      inputs: [{ a, b }],
      solutions: [parseFloat(coefficient.toFixed(2))],
    };
  },
};
