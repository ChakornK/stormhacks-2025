// sin rule
export default {
  generateText(inputs) {
    return `In triangle ABC, a = ${inputs[0].a}, A = ${inputs[0].A}°, B = ${inputs[0].B}°. Use the sine rule to find side b.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 10) + 5;
    const A = Math.floor(Math.random() * 60) + 20;
    const B = Math.floor(Math.random() * 60) + 20;
    const b =
      (a * Math.sin((B * Math.PI) / 180)) / Math.sin((A * Math.PI) / 180);
    return { inputs: [{ a, A, B }], solutions: [parseFloat(b.toFixed(2))] };
  },
};
