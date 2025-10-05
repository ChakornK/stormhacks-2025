// rad -> deg
export default {
  generateText(inputs) {
    return `Convert ${inputs[0].rad} radians to degrees.`;
  },
  generateValues() {
    const rad = parseFloat((Math.random() * 4 * Math.PI).toFixed(3));
    const deg = (rad * 180) / Math.PI;
    return { inputs: [{ rad }], solutions: [parseFloat(deg.toFixed(2))] };
  },
};
