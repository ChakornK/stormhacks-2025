// domain restriction (sqrt)
export default {
  generateText(inputs) {
    return `The function f(x) = sqrt(${inputs[0].a}x + ${inputs[0].b}). Find the smallest integer x in the domain.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const xMin = Math.ceil(-b / a);
    return { inputs: [{ a, b }], solutions: [xMin] };
  },
};
