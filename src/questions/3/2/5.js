// area tri w/ sin
export default {
  generateText(inputs) {
    return `In triangle ABC, sides a = ${inputs[0].a} and b = ${inputs[0].b}, with included angle C = ${inputs[0].C}°. Find the area of the triangle.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 15) + 5;
    const b = Math.floor(Math.random() * 15) + 5;
    const C = Math.floor(Math.random() * 80) + 20;
    const area = 0.5 * a * b * Math.sin((C * Math.PI) / 180);
    return { inputs: [{ a, b, C }], solutions: [parseFloat(area.toFixed(2))] };
  },
};
