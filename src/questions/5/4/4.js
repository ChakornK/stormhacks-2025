// reverse chain rule
export default {
  generateText(inputs) {
    return `Find ∫(${inputs[0].a}(${inputs[0].b}x + ${inputs[0].c})^${inputs[0].n}) dx. Provide the coefficient of x in the integrated term.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 4) + 1;
    const c = Math.floor(Math.random() * 5);
    const n = Math.floor(Math.random() * 3) + 1;
    const coefficient = (a / (n + 1)) * Math.pow(b, -1);
    return {
      inputs: [{ a, b, c, n }],
      solutions: [parseFloat(coefficient.toFixed(2))],
    };
  },
};
