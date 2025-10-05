// Binomial Theorem - Coefficient Finder
export default {
  generateText(inputs) {
    const { n, r, a, b } = inputs[0];
    return `Find the coefficient of \\(x^${r}\\) in the expansion of \\(( ${a} + ${b} )^${n}\\)`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 5) + 3; // 3-7
    const r = Math.floor(Math.random() * (n + 1)); // 0 to n
    const a = Math.floor(Math.random() * 5) + 1; // 1-5
    const b = Math.floor(Math.random() * 5) + 1; // 1-5
    const coeff = Math.round(
      (factorial(n) / (factorial(r) * factorial(n - r))) *
        Math.pow(a, n - r) *
        Math.pow(b, r)
    );
    return {
      inputs: [{ n, r, a, b }],
      solutions: [coeff],
    };

    function factorial(num) {
      return num <= 1 ? 1 : num * factorial(num - 1);
    }
  },
};
