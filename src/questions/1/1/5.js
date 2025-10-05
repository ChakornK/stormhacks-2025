// arithmetic sum
export default {
  generateText(inputs) {
    const { a1, d, n } = inputs[0];
    const secondTerm = a1 + d;
    return `Find the sum of the first ${n} terms of the arithmetic sequence \\(${a1}, ${secondTerm}, ...\\)`;
  },
  generateValues() {
    const a1 = Math.floor(Math.random() * 10) + 1;
    const d = Math.floor(Math.random() * 5) + 1;
    const n = Math.floor(Math.random() * 10) + 5;
    return {
      inputs: [{ a1, d, n }],
      solutions: [(n / 2) * (2 * a1 + (n - 1) * d)],
    };
  },
};
