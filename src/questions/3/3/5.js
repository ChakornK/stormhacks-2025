// find radius from arc length
export default {
  generateText(inputs) {
    return `An arc of length L = ${inputs[0].L} is subtended by an angle θ = ${inputs[0].theta} radians. Find the radius of the circle.`;
  },
  generateValues() {
    const L = Math.floor(Math.random() * 20) + 5;
    const theta = parseFloat((Math.random() * 2 * Math.PI).toFixed(2));
    const r = L / theta;
    return { inputs: [{ L, theta }], solutions: [parseFloat(r.toFixed(2))] };
  },
};
