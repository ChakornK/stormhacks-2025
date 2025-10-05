// cont growth (e)
export default {
  generateText(inputs) {
    return `A bank account grows continuously at ${inputs[0].r}% per year. If the initial deposit is $${inputs[0].P}, find the balance after ${inputs[0].t} years using A = P * e^{rt}.`;
  },
  generateValues() {
    const P = Math.floor(Math.random() * 1000) + 500;
    const r = parseFloat((Math.random() * 0.05 + 0.03).toFixed(3));
    const t = Math.floor(Math.random() * 10) + 5;
    const result = P * Math.exp(r * t);
    return {
      inputs: [{ P, r, t }],
      solutions: [parseFloat(result.toFixed(2))],
    };
  },
};
