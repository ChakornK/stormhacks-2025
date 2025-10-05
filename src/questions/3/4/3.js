// double angle formula for sin
export default {
  generateText(inputs) {
    return `Use the double-angle formula to find sin(2θ) if sin(θ) = ${inputs[0].sinTheta} and cos(θ) = ${inputs[0].cosTheta}.`;
  },
  generateValues() {
    const sinTheta = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const cosTheta = Math.sqrt(1 - sinTheta * sinTheta);
    const sin2Theta = 2 * sinTheta * cosTheta;
    return {
      inputs: [{ sinTheta, cosTheta }],
      solutions: [parseFloat(sin2Theta.toFixed(3))],
    };
  },
};
