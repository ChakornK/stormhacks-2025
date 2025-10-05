// adding constant
export default {
  generateText(inputs) {
    return `The data set is ${inputs[0].data.join(
      ", "
    )}. If 5 is added to each value, find the new mean.`;
  },
  generateValues() {
    const data = Array.from(
      { length: 6 },
      () => Math.floor(Math.random() * 20) + 10
    );
    const k = 5;
    const mean = data.reduce((sum, v) => sum + v, 0) / data.length;
    const newMean = mean + k;
    return { inputs: [{ data }], solutions: [parseFloat(newMean.toFixed(2))] };
  },
};
