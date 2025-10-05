// mean of grouped data
export default {
  generateText(inputs) {
    return `A dataset has values ${inputs[0].values.join(
      ", "
    )}. Find the mean.`;
  },
  generateValues() {
    const values = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 20) + 1
    );
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    return { inputs: [{ values }], solutions: [parseFloat(mean.toFixed(2))] };
  },
};
