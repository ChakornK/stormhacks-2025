// standard deviation
export default {
  generateText(inputs) {
    return `Find the standard deviation of the dataset: ${inputs[0].values.join(
      ", "
    )}.`;
  },
  generateValues() {
    const values = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 20) + 1
    );
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const sd = Math.sqrt(
      values.reduce((a, b) => a + (b - mean) ** 2, 0) / values.length
    );
    return { inputs: [{ values }], solutions: [parseFloat(sd.toFixed(2))] };
  },
};
