// sin
export default {
  generateText(inputs) {
    return `In a right-angled triangle, sin(θ) = opposite/hypotenuse. If the opposite side = ${inputs[0].opp} and the hypotenuse = ${inputs[0].hyp}, find sin(θ).`;
  },
  generateValues() {
    const opp = Math.floor(Math.random() * 10) + 1;
    const hyp = opp + Math.floor(Math.random() * 10) + 1;
    const sinTheta = opp / hyp;
    return {
      inputs: [{ opp, hyp }],
      solutions: [parseFloat(sinTheta.toFixed(3))],
    };
  },
};
