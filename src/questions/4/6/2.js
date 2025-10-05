// median from cumulative frequency
export default {
  generateText(inputs) {
    return `A cumulative frequency table shows totals ${inputs[0].cumFreq.join(
      ", "
    )}. Estimate the median position of the dataset.`;
  },
  generateValues() {
    const cumFreq = [5, 12, 20, 30, 45];
    return {
      inputs: [{ cumFreq }],
      solutions: [Math.ceil(cumFreq[cumFreq.length - 1] / 2)],
    };
  },
};
