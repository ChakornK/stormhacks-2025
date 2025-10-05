// binomial expansion
export default {
  generateText(inputs) {
    const { a, b, n } = inputs[0];
    return `Compute the expansion of \\(( ${a} + ${b} )^${n}\\) and give the sum of all terms.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const n = Math.floor(Math.random() * 4) + 2;
    const sum = Math.pow(a + b, n);
    return {
      inputs: [{ a, b, n }],
      solutions: [sum],
    };
  },
};
