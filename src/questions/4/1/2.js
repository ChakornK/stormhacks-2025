// mean from freq table
export default {
  generateText(inputs) {
    return `A frequency table for scores: ${inputs[0].scores.join(
      ", "
    )} with frequencies ${inputs[0].freq.join(", ")}. Find the mean score.`;
  },
  generateValues() {
    const scores = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 21) + 40
    ); // 40–60
    const freq = Array.from(
      { length: 5 },
      () => Math.floor(Math.random() * 10) + 1
    );
    const total = scores.reduce((sum, s, i) => sum + s * freq[i], 0);
    const totalFreq = freq.reduce((a, b) => a + b, 0);
    const mean = total / totalFreq;
    return {
      inputs: [{ scores, freq }],
      solutions: [parseFloat(mean.toFixed(2))],
    };
  },
};
