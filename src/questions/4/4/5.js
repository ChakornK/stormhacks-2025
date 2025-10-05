// mutually exclusive events
export default {
  generateText(inputs) {
    return `Two mutually exclusive events C and D have probabilities P(C) = ${inputs[0].pC} and P(D) = ${inputs[0].pD}. What is P(C ∪ D)?`;
  },
  generateValues() {
    const pC = parseFloat((Math.random() * 0.7 + 0.1).toFixed(2));
    const pD = parseFloat((Math.random() * 0.7 + 0.1).toFixed(2));
    const union = pC + pD;
    return { inputs: [{ pC, pD }], solutions: [parseFloat(union.toFixed(3))] };
  },
};
