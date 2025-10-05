// 3 eq 3 unk
export default {
  generateText(inputs) {
    const { a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3 } = inputs[0];
    return `Solve the system: \\(${a1}x + ${b1}y + ${c1}z = ${d1}, \\ ${a2}x + ${b2}y + ${c2}z = ${d2}, \\ ${a3}x + ${b3}y + ${c3}z = ${d3}\\)`;
  },
  generateValues() {
    const rand = () => Math.floor(Math.random() * 5) + 1;
    const a1 = rand(),
      b1 = rand(),
      c1 = rand(),
      d1 = rand() * 2;
    const a2 = rand(),
      b2 = rand(),
      c2 = rand(),
      d2 = rand() * 2;
    const a3 = rand(),
      b3 = rand(),
      c3 = rand(),
      d3 = rand() * 2;
    const det =
      a1 * (b2 * c3 - b3 * c2) -
      b1 * (a2 * c3 - a3 * c2) +
      c1 * (a2 * b3 - a3 * b2);
    const x =
      (d1 * (b2 * c3 - b3 * c2) -
        b1 * (d2 * c3 - d3 * c2) +
        c1 * (d2 * b3 - d3 * b2)) /
      det;
    const y =
      (a1 * (d2 * c3 - d3 * c2) -
        d1 * (a2 * c3 - a3 * c2) +
        c1 * (a2 * d3 - a3 * d2)) /
      det;
    const z =
      (a1 * (b2 * d3 - b3 * d2) -
        b1 * (a2 * d3 - a3 * d2) +
        d1 * (a2 * b3 - a3 * b2)) /
      det;
    return {
      inputs: [{ a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3 }],
      solutions: [
        parseFloat(x.toFixed(2)),
        parseFloat(y.toFixed(2)),
        parseFloat(z.toFixed(2)),
      ],
    };
  },
};
