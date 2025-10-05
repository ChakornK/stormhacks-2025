// amp for sign
export default {
  generateText(inputs) {
    return `Find the amplitude of the function f(x) = ${inputs[0].a} * sin(${inputs[0].b}x + ${inputs[0].c}) + ${inputs[0].d}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const c = Math.floor(Math.random() * 10);
    const d = Math.floor(Math.random() * 10);
    return { inputs: [{ a, b, c, d }], solutions: [a] };
  },
};
