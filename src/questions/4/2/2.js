// median

export default {
  generateText(inputs) {
    return `The data set is ${inputs[0].data.join(", ")}. Find the median.`;
  },
  generateValues() {
    const data = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 30) + 5
    ).sort((a, b) => a - b);
    const n = data.length;
    const median =
      n % 2 === 0
        ? (data[n / 2 - 1] + data[n / 2]) / 2
        : data[Math.floor(n / 2)];
    return { inputs: [{ data }], solutions: [parseFloat(median.toFixed(2))] };
  },
};
