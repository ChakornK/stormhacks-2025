// sin word problem
export default {
  generateText(inputs) {
    return `A Ferris wheel rotates such that the height (in meters) of a passenger is given by h = 10 + 8 sin(x), where x is in degrees. Find the height when sin(x) = ${inputs[0].value}.`;
  },
  generateValues() {
    const value = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const height = 10 + 8 * value;
    return {
      inputs: [{ value }],
      solutions: [parseFloat(height.toFixed(2))],
    };
  },
};
