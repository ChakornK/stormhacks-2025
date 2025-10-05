// sin word problem
export default {
  generateText(inputs) {
    return `A Ferris wheel rotates such that height h = 10 + 8 sin(x). Find the height when sin(x) = ${inputs[0].value}.`;
  },
  generateValues() {
    const value = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const height = 10 + 8 * value;
    return { inputs: [{ value }], solutions: [parseFloat(height.toFixed(2))] };
  },
};
