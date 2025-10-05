// arithmetic sequence nth term
export default {
  generateText(inputs) {
    return `Find the ${inputs[0].n}^{th} term of the arithmetic sequence \\(${inputs[0].a1}, ${inputs[0].d}, ...\\)`;
  },
  generateValues() {
    const a1 = Math.floor(Math.random() * 20) + 5;
    const d = Math.floor(Math.random() * 10) + 1;
    const n = Math.floor(Math.random() * 10) + 5;
    return {
      inputs: [{ a1, d, n }],
      solutions: [a1 + (n - 1) * d],
    };
  },
};
