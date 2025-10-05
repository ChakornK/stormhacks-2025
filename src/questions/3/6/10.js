// cos word problem
export default {
  generateText(inputs) {
    return `A lighthouse rotates its light in a circular path. If horizontal distance d = 20 cos(x), find distance when cos(x) = ${inputs[0].value}.`;
  },
  generateValues() {
    const value = parseFloat((Math.random() * 0.9 + 0.1).toFixed(2));
    const distance = 20 * value;
    return {
      inputs: [{ value }],
      solutions: [parseFloat(distance.toFixed(2))],
    };
  },
};
