// arc length
export default {
  generateText(inputs) {
    return `A circle has radius r = ${inputs[0].r} m. Find the length of an arc subtended by angle θ = ${inputs[0].theta}° in meters.`;
  },
  generateValues() {
    const r = Math.floor(Math.random() * 20) + 5;
    const theta = Math.floor(Math.random() * 120) + 30;
    const arcLength = 2 * Math.PI * r * (theta / 360);
    return {
      inputs: [{ r, theta }],
      solutions: [parseFloat(arcLength.toFixed(2))],
    };
  },
};
