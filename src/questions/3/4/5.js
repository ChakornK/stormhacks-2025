// period of sin
export default {
  generateText(inputs) {
    return `Find the period of the function f(x) = ${inputs[0].a} * sin(${inputs[0].b}x + ${inputs[0].c}).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const c = Math.floor(Math.random() * 10);
    const period = (2 * Math.PI) / b;
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(period.toFixed(3))],
    };
  },
};
