// exp decay
export default {
  generateText(inputs) {
    return `A radioactive substance decays according to M(t) = ${inputs[0].M0} * (${inputs[0].r})^t. Find the remaining mass after ${inputs[0].t} years.`;
  },
  generateValues() {
    const M0 = Math.floor(Math.random() * 50) + 50;
    const r = parseFloat((Math.random() * 0.5 + 0.5).toFixed(2));
    const t = Math.floor(Math.random() * 6) + 3;
    const result = M0 * Math.pow(r, t);
    return {
      inputs: [{ M0, r, t }],
      solutions: [parseFloat(result.toFixed(2))],
    };
  },
};
