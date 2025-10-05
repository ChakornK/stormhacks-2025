// rational exponents
export default {
  generateText(inputs) {
    const { a, p, q } = inputs[0];
    return `Simplify: \\(${a}^{${p}/${q}}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 20) + 2;
    const p = Math.floor(Math.random() * 3) + 1;
    const q = Math.floor(Math.random() * 3) + 2;
    return {
      inputs: [{ a, p, q }],
      solutions: [Math.pow(a, p / q)],
    };
  },
};
