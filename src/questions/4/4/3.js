// conditional prob
export default {
  generateText(inputs) {
    return `In a group, ${inputs[0].A} people play football, ${inputs[0].B} people play tennis, and ${inputs[0].both} play both. If a person plays tennis, what is the probability they also play football?`;
  },
  generateValues() {
    const A = Math.floor(Math.random() * 20) + 5;
    const B = Math.floor(Math.random() * 20) + 5;
    const both = Math.min(A, B, Math.floor(Math.random() * 5) + 1);
    const condProb = both / B;
    return {
      inputs: [{ A, B, both }],
      solutions: [parseFloat(condProb.toFixed(3))],
    };
  },
};
