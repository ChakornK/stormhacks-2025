// exp growth
export default {
  generateText(inputs) {
    return `A bacteria culture grows according to N(t) = ${inputs[0].P} * ${inputs[0].r}^t. Find the population after ${inputs[0].t} hours.`;
  },
  generateValues() {
    const P = Math.floor(Math.random() * 50) + 10;
    const r = Math.floor(Math.random() * 3) + 2;
    const t = Math.floor(Math.random() * 5) + 4;
    const result = P * Math.pow(r, t);
    return { inputs: [{ P, r, t }], solutions: [result] };
  },
};
