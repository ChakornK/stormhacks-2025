// binomial theorem - coefficient sum
export default {
  generateText(inputs) {
    const { n } = inputs[0];
    return `Find the sum of all coefficients in the expansion of \\((1 + x)^${n}\\)`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 6) + 3; // 3-8
    const sum = Math.pow(2, n);
    return {
      inputs: [{ n }],
      solutions: [sum],
    };
  },
};
