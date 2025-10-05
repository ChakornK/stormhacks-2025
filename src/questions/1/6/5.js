// binomial coefficient
export default {
  generateText(inputs) {
    return `Compute \\(${inputs[0].n}C${inputs[0].r}\\)`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 8) + 5;
    const r = Math.floor(Math.random() * (n + 1));
    const nCr = factorial(n) / (factorial(r) * factorial(n - r));
    return {
      inputs: [{ n, r }],
      solutions: [nCr],
    };

    function factorial(num) {
      return num <= 1 ? 1 : num * factorial(num - 1);
    }
  },
};
