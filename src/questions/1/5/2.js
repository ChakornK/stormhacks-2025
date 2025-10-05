// quadratic inequality
export default {
  generateText(inputs) {
    const { a, b, c } = inputs[0];
    return `Find the range of x such that \\(${a}x^2 + ${b}x + ${c} \\ge 0\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const c = Math.floor(Math.random() * 10) + 1;
    const discriminant = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return {
      inputs: [{ a, b, c }],
      solutions: [parseFloat(x1.toFixed(2)), parseFloat(x2.toFixed(2))],
    };
  },
};
