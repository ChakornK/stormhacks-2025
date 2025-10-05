// comp fn
export default {
  generateText(inputs) {
    return `Given f(x) = ${inputs[0].a}x + ${inputs[0].b} and g(x) = ${inputs[0].c}x + ${inputs[0].d}, find (f ∘ g)(${inputs[0].x}).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const c = Math.floor(Math.random() * 5) + 1;
    const d = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 5) + 1;
    const result = a * (c * x + d) + b;
    return { inputs: [{ a, b, c, d, x }], solutions: [result] };
  },
};
