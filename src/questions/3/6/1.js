// distnace 3d
export default {
  generateText(inputs) {
    return `Find the distance between points A(${inputs[0].x1},${inputs[0].y1},${inputs[0].z1}) and B(${inputs[0].x2},${inputs[0].y2},${inputs[0].z2}).`;
  },
  generateValues() {
    const x1 = Math.floor(Math.random() * 10);
    const y1 = Math.floor(Math.random() * 10);
    const z1 = Math.floor(Math.random() * 10);
    const x2 = Math.floor(Math.random() * 10);
    const y2 = Math.floor(Math.random() * 10);
    const z2 = Math.floor(Math.random() * 10);
    const distance = Math.sqrt(
      (x2 - x1) ** 2 + (y2 - y1) ** 2 + (z2 - z1) ** 2
    );
    return {
      inputs: [{ x1, y1, z1, x2, y2, z2 }],
      solutions: [parseFloat(distance.toFixed(2))],
    };
  },
};
