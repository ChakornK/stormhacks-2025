// eqn of line
export default {
  generateText(inputs) {
    const { m, c } = inputs[0];
    return `Find the y-intercept of the line with gradient ${m} that passes through y = ${c} when x = 0.`;
  },
  generateValues() {
    const m = Math.floor(Math.random() * 10) - 5;
    const c = Math.floor(Math.random() * 20) - 10;
    return {
      inputs: [{ m, c }],
      solutions: [c],
    };
  },
};
