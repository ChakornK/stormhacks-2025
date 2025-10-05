// solving quadratic
export default {
  generateText(inputs) {
    const { a, b, c } = inputs[0];
    return `Find the roots of the quadratic equation ${a}x^2 + ${b}x + ${c} = 0.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const c = Math.floor(Math.random() * 5) - 2;
    const discriminant = b * b - 4 * a * c;
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(root1.toFixed(2)), parseFloat(root2.toFixed(2))],
    };
  },
};
