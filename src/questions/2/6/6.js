// ln
export default {
  generateText(inputs) {
    return `Find x if ln(x) = ${inputs[0].y}.`;
  },
  generateValues() {
    const y = parseFloat((Math.random() * 5 + 1).toFixed(2));
    const x = Math.exp(y);
    return { inputs: [{ y }], solutions: [parseFloat(x.toFixed(2))] };
  },
};
