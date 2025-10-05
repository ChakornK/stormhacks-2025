// exponential equations
export default {
  generateText(inputs) {
    const { a, n } = inputs[0];
    return `Solve for x: \\(${a}^x = ${n}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 4) + 2;
    const nPower = Math.floor(Math.random() * 4) + 2;
    const n = Math.pow(a, nPower);
    return {
      inputs: [{ a, n }],
      solutions: [Math.log(n) / Math.log(a)],
    };
  },
};
