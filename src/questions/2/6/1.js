// linear fn eval
export default {
  generateText(inputs) {
    return `Evaluate the linear function f(x) = ${inputs[0].a}x + ${inputs[0].b} at x = ${inputs[0].x}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) - 5;
    const b = Math.floor(Math.random() * 10) - 5;
    const x = Math.floor(Math.random() * 10);
    const result = a * x + b;
    return { inputs: [{ a, b, x }], solutions: [result] };
  },
};
