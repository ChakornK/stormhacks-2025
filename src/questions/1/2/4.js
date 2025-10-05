// product rule logs
export default {
  generateText(inputs) {
    const { x, y } = inputs[0];
    return `Simplify: \\(\\log(${x}) + \\log(${y})\\)`;
  },
  generateValues() {
    const x = Math.floor(Math.random() * 8) + 2;
    const y = Math.floor(Math.random() * 8) + 2;
    return {
      inputs: [{ x, y }],
      solutions: [Math.log10(x * y)],
    };
  },
};
