// independent events
export default {
  generateText(inputs) {
    return `Two independent events A and B have probabilities P(A) = ${inputs[0].pA} and P(B) = ${inputs[0].pB}. What is P(A ∩ B)?`;
  },
  generateValues() {
    const pA = parseFloat((Math.random() * 0.7 + 0.1).toFixed(2));
    const pB = parseFloat((Math.random() * 0.7 + 0.1).toFixed(2));
    const prob = pA * pB;
    return { inputs: [{ pA, pB }], solutions: [parseFloat(prob.toFixed(3))] };
  },
};
