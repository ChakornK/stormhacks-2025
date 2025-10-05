// reflect x-axis
export default {
  generateText(inputs) {
    return `Reflect the function f(x) = ${inputs[0].a}x^2 + ${inputs[0].b} over the x-axis. Find f(${inputs[0].x}) after reflection.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const x = Math.floor(Math.random() * 5) + 1;
    const result = -(a * x * x + b);
    return { inputs: [{ a, b, x }], solutions: [result] };
  },
};
