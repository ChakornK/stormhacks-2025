// base 10 logs

export default {
  generateText(inputs) {
    const { x } = inputs[0];
    return `Evaluate: \\(\\log_{10} ${x}\\)`;
  },
  generateValues() {
    const x = Math.pow(10, Math.floor(Math.random() * 3) + 1);
    return {
      inputs: [{ x }],
      solutions: [Math.log10(x)],
    };
  },
};
