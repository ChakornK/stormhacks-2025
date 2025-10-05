// complimentary prob
export default {
  generateText(inputs) {
    return `The probability that it rains today is ${inputs[0].p}. What is the probability that it does NOT rain?`;
  },
  generateValues() {
    const p = parseFloat((Math.random() * 0.8 + 0.1).toFixed(2)); // 0.1–0.9
    const complement = 1 - p;
    return { inputs: [{ p }], solutions: [parseFloat(complement.toFixed(3))] };
  },
};
