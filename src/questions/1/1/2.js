// geometric sum
export default {
  generateText(inputs) {
    const { a1, r, n } = inputs[0];
    const secondTerm = a1 * r;
    return `Find the sum of the first ${n} terms of the geometric sequence \\(${a1}, ${secondTerm}, ...\\)`;
  },
  generateValues() {
    const a1 = Math.floor(Math.random() * 5) + 1;
    const r = Math.floor(Math.random() * 3) + 2; // ratio >1
    const n = Math.floor(Math.random() * 6) + 4;
    return {
      inputs: [{ a1, r, n }],
      solutions: [(a1 * (Math.pow(r, n) - 1)) / (r - 1)],
    };
  },
};
