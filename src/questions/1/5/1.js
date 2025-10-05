// linear inequality
export default {
  generateText(inputs) {
    const { a, b, c } = inputs[0];
    return `Solve for x: \\(${a}x + ${b} \\le ${c}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = Math.floor(Math.random() * 30) + 5;
    const x = (c - b) / a;
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(x.toFixed(2))],
    };
  },
};
