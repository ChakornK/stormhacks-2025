// sector area
export default {
  generateText(inputs) {
    return `A circle has radius r = ${inputs[0].r} m. Find the area of a sector subtended by angle θ = ${inputs[0].theta}° in square meters.`;
  },
  generateValues() {
    const r = Math.floor(Math.random() * 20) + 5;
    const theta = Math.floor(Math.random() * 120) + 30;
    const area = Math.PI * r ** 2 * (theta / 360);
    return { inputs: [{ r, theta }], solutions: [parseFloat(area.toFixed(2))] };
  },
};
