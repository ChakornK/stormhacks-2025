// midpoint 3d
export default {
  generateText(inputs) {
    return `Find the midpoint of the line segment joining points P(${inputs[0].x1},${inputs[0].y1},${inputs[0].z1}) and Q(${inputs[0].x2},${inputs[0].y2},${inputs[0].z2}).`;
  },
  generateValues() {
    const x1 = Math.floor(Math.random() * 10);
    const y1 = Math.floor(Math.random() * 10);
    const z1 = Math.floor(Math.random() * 10);
    const x2 = Math.floor(Math.random() * 10);
    const y2 = Math.floor(Math.random() * 10);
    const z2 = Math.floor(Math.random() * 10);
    const midpoint = [(x1 + x2) / 2, (y1 + y2) / 2, (z1 + z2) / 2];
    return {
      inputs: [{ x1, y1, z1, x2, y2, z2 }],
      solutions: midpoint.map((v) => parseFloat(v.toFixed(2))),
    };
  },
};
