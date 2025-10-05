// quad vert/max
export default {
  generateText(inputs) {
    return `The height of a projectile is given by h(t) = -${inputs[0].a}t^2 + ${inputs[0].b}t + ${inputs[0].c}. Find the maximum height.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) + 5;
    const c = Math.floor(Math.random() * 5) + 1;
    const maxHeight = (-b * b) / (4 * -a) + c;
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(maxHeight.toFixed(2))],
    };
  },
};
