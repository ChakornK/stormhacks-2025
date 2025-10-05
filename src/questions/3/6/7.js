// sin with pythag
export default {
  generateText(inputs) {
    return `Given cos(θ) = ${inputs[0].cosTheta}, find sin(θ) for 0 ≤ θ ≤ 90°.`;
  },
  generateValues() {
    const cosTheta = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const sinTheta = Math.sqrt(1 - cosTheta ** 2);
    return {
      inputs: [{ cosTheta }],
      solutions: [parseFloat(sinTheta.toFixed(3))],
    };
  },
};
