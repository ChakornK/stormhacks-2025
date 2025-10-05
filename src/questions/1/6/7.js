// two var system
export default {
  generateText(inputs) {
    const { a1, b1, c1, a2, b2, c2 } = inputs[0];
    return `Solve the system: \\(${a1}x + ${b1}y = ${c1}, \\ ${a2}x + ${b2}y = ${c2}\\)`;
  },
  generateValues() {
    const a1 = Math.floor(Math.random() * 5) + 1;
    const b1 = Math.floor(Math.random() * 5) + 1;
    const c1 = Math.floor(Math.random() * 20) + 1;
    const a2 = Math.floor(Math.random() * 5) + 1;
    const b2 = Math.floor(Math.random() * 5) + 1;
    const c2 = Math.floor(Math.random() * 20) + 1;
    const det = a1 * b2 - a2 * b1;
    const x = (c1 * b2 - c2 * b1) / det;
    const y = (a1 * c2 - a2 * c1) / det;
    return {
      inputs: [{ a1, b1, c1, a2, b2, c2 }],
      solutions: [parseFloat(x.toFixed(2)), parseFloat(y.toFixed(2))],
    };
  },
};
