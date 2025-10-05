// integer powers
export default {
  generateText(inputs) {
    const { a, m, n } = inputs[0];
    return `Simplify: \\(${a}^${m} \\cdot ${a}^${n}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 2;
    const m = Math.floor(Math.random() * 4) + 1;
    const n = Math.floor(Math.random() * 4) + 1;
    return {
      inputs: [{ a, m, n }],
      solutions: [Math.pow(a, m + n)],
    };
  },
};
