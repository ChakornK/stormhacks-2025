// function eval
export default {
  generateText(inputs) {
    return `If f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x + ${inputs[0].c}, compute f(${inputs[0].x}).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 10) - 5;
    const x = Math.floor(Math.random() * 10) + 1;
    const result = a * x * x + b * x + c;
    return { inputs: [{ a, b, c, x }], solutions: [result] };
  },
};
