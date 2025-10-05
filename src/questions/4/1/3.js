// median from cumulative freq
export default {
  generateText(inputs) {
    return `A cumulative frequency graph shows cumulative frequencies ${inputs[0].cumFreq.join(
      ", "
    )} for class intervals ${inputs[0].intervals.join(
      ", "
    )}. Estimate the median.`;
  },
  generateValues() {
    const intervals = ["0-10", "10-20", "20-30", "30-40", "40-50"];
    const cumFreq = [];
    let sum = 0;
    for (let i = 0; i < 5; i++) {
      const freq = Math.floor(Math.random() * 10) + 5;
      sum += freq;
      cumFreq.push(sum);
    }
    const N = sum;
    const medianClass = 20; // simplified example
    return { inputs: [{ intervals, cumFreq }], solutions: [medianClass] };
  },
};
