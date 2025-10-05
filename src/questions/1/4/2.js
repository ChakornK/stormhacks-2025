// 2 eq 2 unk
export default {
  generateText(inputs) {
    const { a, b, c, d, e, f } = inputs[0];
    return `Solve the system: \\(${a}x + ${b}y = ${c}, \\ ${d}x + ${e}y = ${f}\\)`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 6) + 1;
    const b = Math.floor(Math.random() * 6) + 1;
    const c = Math.floor(Math.random() * 20) + 1;
    const d = Math.floor(Math.random() * 6) + 1;
    const e = Math.floor(Math.random() * 6) + 1;
    const f = Math.floor(Math.random() * 20) + 1;
    const det = a * e - b * d;
    const x = (c * e - b * f) / det;
    const y = (a * f - c * d) / det;
    return {
      inputs: [{ a, b, c, d, e, f }],
      solutions: [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))],
    };
  },
};
