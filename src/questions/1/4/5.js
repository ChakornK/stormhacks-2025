// word problem
export default {
  generateText(inputs) {
    const { a, b, c, d, e, f } = inputs[0];
    return `A shop sells pencils and erasers. Pencils cost \\$${a} each and erasers \\$${b} each. If 3 pencils and 2 erasers cost \\$${c}, and 2 pencils and 5 erasers cost \\$${d}, find the price of one pencil and one eraser.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const c = 3 * a + 2 * b;
    const d = 2 * a + 5 * b;
    const det = 3 * 5 - 2 * 2;
    const pencil = (c * 5 - 2 * d) / det;
    const eraser = (3 * d - 2 * c) / det;
    return {
      inputs: [{ a, b, c, d, e: 0, f: 0 }],
      solutions: [parseFloat(pencil.toFixed(2)), parseFloat(eraser.toFixed(2))],
    };
  },
};
