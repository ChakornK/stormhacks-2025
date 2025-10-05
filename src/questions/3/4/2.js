// cos using sin
export default {
  generateText(inputs) {
    return `Given sin(θ) = ${inputs[0].sinTheta}, find cos(θ) for 0 ≤ θ ≤ 90° using the Pythagorean identity.`;
  },
  generateValues() {
    const sinTheta = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const cosTheta = Math.sqrt(1 - sinTheta * sinTheta);
    return {
      inputs: [{ sinTheta }],
      solutions: [parseFloat(cosTheta.toFixed(3))],
    };
  },
};
