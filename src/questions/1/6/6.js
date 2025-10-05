// sum binomial coeff
export default {
  generateText(inputs) {
    return `Find the sum of all coefficients in the expansion of \\((1 + x)^${inputs[0].n}\\)`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 6) + 3;
    return {
      inputs: [{ n }],
      solutions: [Math.pow(2, n)],
    };
  },
};
