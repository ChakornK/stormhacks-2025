// prob of specific outcome (binomial)
export default {
  generateText(inputs) {
    return `A biased coin has probability p = ${inputs[0].p} of landing heads. It is flipped n = ${inputs[0].n} times. Find the probability of exactly k = ${inputs[0].k} heads.`;
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
    const prob = comb(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
    return { inputs: [{ n, k, p }], solutions: [parseFloat(prob.toFixed(3))] };
  },
};
