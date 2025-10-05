// geometric series sum
export default {
  generateText(inputs) {
    return `Find the sum of the first ${inputs[0].n} terms of the geometric sequence \\(${inputs[0].a1}, ${inputs[0].r} \\cdot ${inputs[0].a1}, ...\\)`;
  },
  generateValues() {
    const a1 = Math.floor(Math.random() * 5) + 1;
    const r = Math.floor(Math.random() * 3) + 2;
    const n = Math.floor(Math.random() * 6) + 4;
    return {
      inputs: [{ a1, r, n }],
      solutions: [(a1 * (Math.pow(r, n) - 1)) / (r - 1)],
    };
  },
};
