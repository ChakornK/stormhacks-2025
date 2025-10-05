// solve sinx
export default {
  generateText(inputs) {
    return `Solve sin(x) = ${inputs[0].value} for 0° ≤ x ≤ 180°. Give your answer in degrees.`;
  },
  generateValues() {
    const value = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const x1 = (Math.asin(value) * 180) / Math.PI;
    const x2 = 180 - x1;
    return {
      inputs: [{ value }],
      solutions: [parseFloat(x1.toFixed(2)), parseFloat(x2.toFixed(2))],
    };
  },
};
