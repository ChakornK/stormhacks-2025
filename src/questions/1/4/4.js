// one eq solved
export default {
  generateText(inputs) {
    const { m1, n1, p1, m2, n2, p2 } = inputs[0];
    return `Solve: \\(${m1}x + ${n1}y = ${p1}, \\ ${m2}x + ${n2}y = ${p2}\\)`;
  },
  generateValues() {
    const m1 = Math.floor(Math.random() * 6) + 1;
    const n1 = Math.floor(Math.random() * 6) + 1;
    const p1 = Math.floor(Math.random() * 20) + 1;
    const m2 = Math.floor(Math.random() * 6) + 1;
    const n2 = Math.floor(Math.random() * 6) + 1;
    const p2 = Math.floor(Math.random() * 20) + 1;
    const det = m1 * n2 - m2 * n1;
    const x = (p1 * n2 - p2 * n1) / det;
    const y = (m1 * p2 - m2 * p1) / det;
    return {
      inputs: [{ m1, n1, p1, m2, n2, p2 }],
      solutions: [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))],
    };
  },
};
