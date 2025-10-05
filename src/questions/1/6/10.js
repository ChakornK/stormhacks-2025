// abs value
export default {
  generateText(inputs) {
    const { a, b } = inputs[0];
    return `Solve for x: \\(|${a}x - ${b}| = ${b}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const x1 = (b + b) / a;
    const x2 = (b - b) / a;
    return {
      inputs: [{ a, b }],
      solutions: [parseFloat(x1.toFixed(2)), parseFloat(x2.toFixed(2))],
    };
  },
};
