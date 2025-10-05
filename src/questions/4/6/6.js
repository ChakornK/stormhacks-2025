// regression pred.
export default {
  generateText(inputs) {
    return `Given the regression line y = ${inputs[0].a}x + ${inputs[0].b}, find y when x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = parseFloat((Math.random() * 2 + 0.5).toFixed(2));
    const b = parseFloat((Math.random() * 5).toFixed(2));
    const x = Math.floor(Math.random() * 10) + 1;
    const y = a * x + b;
    return { inputs: [{ a, b, x }], solutions: [parseFloat(y.toFixed(2))] };
  },
};
