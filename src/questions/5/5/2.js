// definite integral of linear fn
export default {
  generateText(inputs) {
    return `Compute ∫ from x=${inputs[0].x0} to x=${inputs[0].x1} of f(x) = ${inputs[0].a}x + ${inputs[0].b}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const x0 = 0;
    const x1 = Math.floor(Math.random() * 5) + 2;
    const area = (a * (Math.pow(x1, 2) - Math.pow(x0, 2))) / 2 + b * (x1 - x0);
    return {
      inputs: [{ a, b, x0, x1 }],
      solutions: [parseFloat(area.toFixed(2))],
    };
  },
};
