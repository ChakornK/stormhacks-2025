// cos rule
export default {
  generateText(inputs) {
    return `In triangle ABC, a = ${inputs[0].a}, b = ${inputs[0].b}, C = ${inputs[0].C}°. Use the cosine rule to find side c.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) + 5;
    const b = Math.floor(Math.random() * 10) + 5;
    const C = Math.floor(Math.random() * 100) + 20;
    const c = Math.sqrt(
      a * a + b * b - 2 * a * b * Math.cos((C * Math.PI) / 180)
    );
    return { inputs: [{ a, b, C }], solutions: [parseFloat(c.toFixed(2))] };
  },
};
