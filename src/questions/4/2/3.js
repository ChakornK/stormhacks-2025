// standard deviation
export default {
  generateText(inputs) {
    return `The data set is ${inputs[0].data.join(
      ", "
    )}. Find the standard deviation.`;
  },
  generateValues() {
    const data = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 20) + 10
    );
    const mean = data.reduce((sum, v) => sum + v, 0) / data.length;
    const variance =
      data.reduce((sum, v) => sum + (v - mean) ** 2, 0) / data.length;
    const stdDev = Math.sqrt(variance);
    return { inputs: [{ data }], solutions: [parseFloat(stdDev.toFixed(2))] };
  },
};
