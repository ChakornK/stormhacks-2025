// sin rule
export default {
  generateText(inputs) {
    return `In triangle ABC, angle A = ${inputs[0].A}°, angle B = ${inputs[0].B}°, and side a = ${inputs[0].a}. Find side b using the sine rule.`;
  },
  generateValues() {
    const A = Math.floor(Math.random() * 50) + 20;
    const B = Math.floor(Math.random() * 50) + 20;
    const a = Math.floor(Math.random() * 15) + 5;
    const b =
      (a * Math.sin((B * Math.PI) / 180)) / Math.sin((A * Math.PI) / 180);
    return { inputs: [{ A, B, a }], solutions: [parseFloat(b.toFixed(2))] };
  },
};
