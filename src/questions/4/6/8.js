// independent events prob
export default {
  generateText(inputs) {
    return `Two independent events A and B have P(A)=${inputs[0].pA}, P(B)=${inputs[0].pB}. Find P(A ∩ B).`;
  },
  generateValues() {
    const pA = parseFloat((Math.random() * 0.7 + 0.1).toFixed(2));
    const pB = parseFloat((Math.random() * 0.7 + 0.1).toFixed(2));
    return {
      inputs: [{ pA, pB }],
      solutions: [parseFloat((pA * pB).toFixed(3))],
    };
  },
};
