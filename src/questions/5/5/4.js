// definite integral of quadratic and linear
export default {
  generateText(inputs) {
    return `Compute ∫ from x=${inputs[0].x0} to x=${inputs[0].x1} of f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const x0 = 0;
    const x1 = Math.floor(Math.random() * 5) + 2;
    const area =
      (a * (Math.pow(x1, 3) - Math.pow(x0, 3))) / 3 +
      (b * (Math.pow(x1, 2) - Math.pow(x0, 2))) / 2;
    return {
      inputs: [{ a, b, x0, x1 }],
      solutions: [parseFloat(area.toFixed(2))],
    };
  },
};
