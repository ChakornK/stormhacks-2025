// mean
export default {
  generateText(inputs) {
    return `The data set is ${inputs[0].data.join(", ")}. Find the mean.`;
  },
  generateValues() {
    const data = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 20) + 10
    );
    const mean = data.reduce((sum, v) => sum + v, 0) / data.length;
    return { inputs: [{ data }], solutions: [parseFloat(mean.toFixed(2))] };
  },
};
