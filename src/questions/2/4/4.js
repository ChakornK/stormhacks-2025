// vert stretch
export default {
  generateText(inputs) {
    return `The function f(x) = ${inputs[0].a}x + ${inputs[0].b} is vertically stretched by a factor of ${inputs[0].k}. Find f(${inputs[0].x}) after the stretch.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const k = Math.floor(Math.random() * 5) + 1;
    const x = Math.floor(Math.random() * 5) + 1;
    const result = k * (a * x + b);
    return { inputs: [{ a, b, k, x }], solutions: [result] };
  },
};
