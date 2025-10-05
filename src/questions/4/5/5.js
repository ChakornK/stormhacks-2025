// cumulative prob
export default {
  generateText(inputs) {
    return `A discrete random variable X has values 0,1,2,...,${inputs[0].n} with binomial probabilities P(X=k) for n = ${inputs[0].n}, p = ${inputs[0].p}. Find the probability that X ≤ ${inputs[0].k}.`;
  },
  generateValues() {
    const n = Math.floor(Math.random() * 5) + 3;
    const k = Math.floor(Math.random() * n) + 1;
    const p = parseFloat((Math.random() * 0.5 + 0.25).toFixed(2));
    const comb = (n, k) => {
      if (k === 0 || k === n) return 1;
      let res = 1;
      for (let i = 1; i <= k; i++) res = (res * (n - i + 1)) / i;
      return res;
    };
    let cumProb = 0;
    for (let i = 0; i <= k; i++)
      cumProb += comb(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
    return {
      inputs: [{ n, k, p }],
      solutions: [parseFloat(cumProb.toFixed(3))],
    };
  },
};
