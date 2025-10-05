// mean and variance of binominal dist.
export default {
  generateText(inputs) {
    return `A binomial random variable has n = ${inputs[0].n} trials and probability of success p = ${inputs[0].p}. Find the mean and variance.`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 10) + 5;
    const p = parseFloat((Math.random() * 0.5 + 0.25).toFixed(2));
    const mean = n * p;
    const variance = n * p * (1 - p);
    return {
      inputs: [{ n, p }],
      solutions: [parseFloat(mean.toFixed(2)), parseFloat(variance.toFixed(2))],
    };
  },
};
