// inv fn
export default {
  generateText(inputs) {
    return `Find f^{-1}(${inputs[0].y}) for f(x) = ${inputs[0].a}x + ${inputs[0].b}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const y = Math.floor(Math.random() * 20) + 5;
    const result = (y - b) / a;
    return {
      inputs: [{ a, b, y }],
      solutions: [parseFloat(result.toFixed(2))],
    };
  },
};
