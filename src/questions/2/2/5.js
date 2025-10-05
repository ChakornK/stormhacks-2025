// linear function intersection
export default {
  generateText(inputs) {
    return `Find the x-coordinate of the intersection of the lines y = ${inputs[0].m1}x + ${inputs[0].c1} and y = ${inputs[0].m2}x + ${inputs[0].c2}.`;
  },
  generateValues() {
    const m1 = Math.floor(Math.random() * 5) - 2;
    const c1 = Math.floor(Math.random() * 10) - 5;
    const m2 = Math.floor(Math.random() * 5) - 2;
    const c2 = Math.floor(Math.random() * 10) - 5;
    const x = (c2 - c1) / (m1 - m2);
    return {
      inputs: [{ m1, c1, m2, c2 }],
      solutions: [parseFloat(x.toFixed(2))],
    };
  },
};
