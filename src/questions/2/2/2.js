// inverse function eval
export default {
  generateText(inputs) {
    return `If f(x) = ${inputs[0].a}x + ${inputs[0].b}, find f^{-1}(${inputs[0].y}).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const y = Math.floor(Math.random() * 20) + 5;
    const x = (y - b) / a;
    return { inputs: [{ a, b, y }], solutions: [parseFloat(x.toFixed(2))] };
  },
};
