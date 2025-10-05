// arc length circle
export default {
  generateText(inputs) {
    return `A circle has radius r = ${inputs[0].r}. Find the length of an arc subtended by angle θ = ${inputs[0].theta} radians.`;
  },
  generateValues() {
    const r = Math.floor(Math.random() * 10) + 1;
    const theta = parseFloat((Math.random() * 2 * Math.PI).toFixed(2));
    const arcLength = r * theta;
    return {
      inputs: [{ r, theta }],
      solutions: [parseFloat(arcLength.toFixed(2))],
    };
  },
};
