// midpt 2 pts, 3d
export default {
  generateText(inputs) {
    return `Find the midpoint of points A(${inputs[0].x1}, ${inputs[0].y1}, ${inputs[0].z1}) and B(${inputs[0].x2}, ${inputs[0].y2}, ${inputs[0].z2}).`;
  },
  generateValues() {
    const x1 = Math.floor(Math.random() * 10);
    const y1 = Math.floor(Math.random() * 10);
    const z1 = Math.floor(Math.random() * 10);
    const x2 = Math.floor(Math.random() * 10);
    const y2 = Math.floor(Math.random() * 10);
    const z2 = Math.floor(Math.random() * 10);
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const mz = (z1 + z2) / 2;
    return {
      inputs: [{ x1, y1, z1, x2, y2, z2 }],
      solutions: [
        parseFloat(mx.toFixed(2)),
        parseFloat(my.toFixed(2)),
        parseFloat(mz.toFixed(2)),
      ],
    };
  },
};
