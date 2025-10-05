// solve tanx
export default {
  generateText(inputs) {
    return `Solve tan(x) = ${inputs[0].value} for 0° ≤ x ≤ 180°. Give your answer in degrees.`;
  },
  generateValues() {
    const value = parseFloat((Math.random() * 5).toFixed(2));
    const x = (Math.atan(value) * 180) / Math.PI;
    const x2 = x + 180;
    return {
      inputs: [{ value }],
      solutions: [parseFloat(x.toFixed(2)), parseFloat(x2.toFixed(2))],
    };
  },
};
