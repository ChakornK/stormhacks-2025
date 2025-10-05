// exp growth
export default {
  generateText(inputs) {
    return `A savings account grows according to A(t) = ${inputs[0].P} * ${inputs[0].r}^t. Find the account balance after ${inputs[0].t} years.`;
  },
  generateValues() {
    const P = Math.floor(Math.random() * 1000) + 500;
    const r = parseFloat((Math.random() * 0.2 + 1.05).toFixed(2));
    const t = Math.floor(Math.random() * 10) + 1;
    const result = P * Math.pow(r, t);
    return {
      inputs: [{ P, r, t }],
      solutions: [parseFloat(result.toFixed(2))],
    };
  },
};
