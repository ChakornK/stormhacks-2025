// area btwn quadratic and linear
export default {
  generateText(inputs) {
    return `Find the area enclosed between f(x) = ${inputs[0].a}x^2 and g(x) = ${inputs[0].b}x from x=${inputs[0].x0} to x=${inputs[0].x1}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 3) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const x0 = 0;
    const x1 = Math.floor(Math.random() * 5) + 2;
    const area = Math.abs(
      (a * (Math.pow(x1, 3) - Math.pow(x0, 3))) / 3 -
        (b * (Math.pow(x1, 2) - Math.pow(x0, 2))) / 2
    );
    return {
      inputs: [{ a, b, x0, x1 }],
      solutions: [parseFloat(area.toFixed(2))],
    };
  },
};
