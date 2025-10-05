// cos world problem
export default {
  generateText(inputs) {
    return `A lighthouse rotates its light in a circular path. If the horizontal distance is given by d = 20 cos(x), where x is in degrees, find the distance when cos(x) = ${inputs[0].value}.`;
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
