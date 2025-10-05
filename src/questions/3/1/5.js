// angle btwn 2 lines (3d vectors)
export default {
  generateText(inputs) {
    return `Find the angle (in degrees) between vectors u = (${inputs[0].u1}, ${inputs[0].u2}, ${inputs[0].u3}) and v = (${inputs[0].v1}, ${inputs[0].v2}, ${inputs[0].v3}).`;
  },
  generateValues() {
    const u1 = Math.floor(Math.random() * 5) + 1;
    const u2 = Math.floor(Math.random() * 5) + 1;
    const u3 = Math.floor(Math.random() * 5) + 1;
    const v1 = Math.floor(Math.random() * 5) + 1;
    const v2 = Math.floor(Math.random() * 5) + 1;
    const v3 = Math.floor(Math.random() * 5) + 1;
    const dot = u1 * v1 + u2 * v2 + u3 * v3;
    const magU = Math.sqrt(u1 ** 2 + u2 ** 2 + u3 ** 2);
    const magV = Math.sqrt(v1 ** 2 + v2 ** 2 + v3 ** 2);
    const angleRad = Math.acos(dot / (magU * magV));
    const angleDeg = (angleRad * 180) / Math.PI;
    return {
      inputs: [{ u1, u2, u3, v1, v2, v3 }],
      solutions: [parseFloat(angleDeg.toFixed(2))],
    };
  },
};
