// cos rule for side
export default {
  generateText(inputs) {
    return `In triangle XYZ, sides x = ${inputs[0].x}, y = ${inputs[0].y}, and angle Z = ${inputs[0].Z}°. Find side z using the cosine rule.`;
  },
  generateValues() {
    const x = Math.floor(Math.random() * 15) + 5;
    const y = Math.floor(Math.random() * 15) + 5;
    const Z = Math.floor(Math.random() * 80) + 20;
    const z = Math.sqrt(
      x ** 2 + y ** 2 - 2 * x * y * Math.cos((Z * Math.PI) / 180)
    );
    return { inputs: [{ x, y, Z }], solutions: [parseFloat(z.toFixed(2))] };
  },
};
