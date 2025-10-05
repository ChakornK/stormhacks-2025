// discriminant and nature of roots
export default {
  generateText(inputs) {
    const { a, b, c } = inputs[0];
    return `Compute the discriminant of the quadratic equation ${a}x^2 + ${b}x + ${c} = 0.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const c = Math.floor(Math.random() * 5) - 2;
    const discriminant = b * b - 4 * a * c;
    return {
      inputs: [{ a, b, c }],
      solutions: [discriminant],
    };
  },
};
