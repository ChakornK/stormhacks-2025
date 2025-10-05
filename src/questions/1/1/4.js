// infinite geometric series
export default {
  generateText(inputs) {
    return `Determine the sum of the infinite geometric series \\(${
      inputs[0].a1
    }, ${inputs[0].a1 * inputs[0].r}, ...\\)`;
  },
  generateValues() {
    const a1 = Math.floor(Math.random() * 5) + 1;
    const r = parseFloat((Math.random() * 0.8 + 0.1).toFixed(2)); // 0.1 - 0.9
    return {
      inputs: [{ a1, r }],
      solutions: [a1 / (1 - r)],
    };
  },
};
