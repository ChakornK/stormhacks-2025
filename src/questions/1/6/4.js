// logs
export default {
  generateText(inputs) {
    return `Compute: \\(\\log_{10}(${inputs[0].x})\\)`;
  },
  generateValues() {
    const x = Math.floor(Math.random() * 90) + 10;
    return {
      inputs: [{ x }],
      solutions: [parseFloat(Math.log10(x).toFixed(2))],
    };
  },
};
