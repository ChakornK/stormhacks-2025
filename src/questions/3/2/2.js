// tan
export default {
  generateText(inputs) {
    return `In a right-angled triangle, tan(θ) = opposite/adjacent. If the opposite side = ${inputs[0].opp} and the adjacent side = ${inputs[0].adj}, find tan(θ).`;
  },
  generateValues() {
    const opp = Math.floor(Math.random() * 10) + 1;
    const adj = Math.floor(Math.random() * 10) + 1;
    const tanTheta = opp / adj;
    return {
      inputs: [{ opp, adj }],
      solutions: [parseFloat(tanTheta.toFixed(3))],
    };
  },
};
