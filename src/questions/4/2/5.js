// multiplying by constant
export default {
  generateText(inputs) {
    return `The data set is ${inputs[0].data.join(
      ", "
    )}. If each value is multiplied by 3, find the new standard deviation.`;
  },
  generateValues() {
    const data = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 20) + 10
    );
    const factor = 3;
    const mean = data.reduce((sum, v) => sum + v, 0) / data.length;
    const variance =
      data.reduce((sum, v) => sum + (v - mean) ** 2, 0) / data.length;
    const stdDev = Math.sqrt(variance);
    const newStdDev = stdDev * factor;
    return {
      inputs: [{ data }],
      solutions: [parseFloat(newStdDev.toFixed(2))],
    };
  },
};
