// pascals triangle
export default {
  generateText(inputs) {
    const { n, k } = inputs[0];
    return `Using Pascal’s triangle, find the coefficient of the ${
      k + 1
    }-th term in the expansion of \\((1 + x)^${n}\\)`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 5) + 4; // 4-8
    const k = Math.floor(Math.random() * (n + 1));
    const coeff = factorial(n) / (factorial(k) * factorial(n - k));
    return {
      inputs: [{ n, k }],
      solutions: [coeff],
    };

    function factorial(num) {
      return num <= 1 ? 1 : num * factorial(num - 1);
    }
  },
};
