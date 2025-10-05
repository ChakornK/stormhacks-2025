// pop porpor
export default {
  generateText(inputs) {
    return `A population contains ${inputs[0].pop} items, of which ${inputs[0].sample} are randomly sampled. What fraction of the population was sampled?`;
  },
  generateValues() {
    const pop = Math.floor(Math.random() * 100) + 50;
    const sample = Math.floor(Math.random() * 50) + 5;
    return {
      inputs: [{ pop, sample }],
      solutions: [parseFloat((sample / pop).toFixed(3))],
    };
  },
};
