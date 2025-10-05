// exponent laws
export default {
  generateText(inputs) {
    return `Simplify and compute: \\(${inputs[0].a}^${inputs[0].m} \\cdot ${inputs[0].a}^${inputs[0].n}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) + 2;
    const m = Math.floor(Math.random() * 5) + 1;
    const n = Math.floor(Math.random() * 5) + 1;
    return {
      inputs: [{ a, m, n }],
      solutions: [Math.pow(a, m + n)],
    };
  },
};
