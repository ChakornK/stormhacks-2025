// nCr
export default {
  generateText(inputs) {
    const { n, r } = inputs[0];
    return `Compute \\(${n}C${r}\\)`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 10) + 5; // 5-14
    const r = Math.floor(Math.random() * (n + 1)); // 0 to n
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
