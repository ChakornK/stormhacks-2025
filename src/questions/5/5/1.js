// area under curve
export default {
  generateText(inputs) {
    return `Calculate the area under the curve f(x) = ${inputs[0].a}x^2 from x = ${inputs[0].x0} to x = ${inputs[0].x1}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const x0 = 0;
    const x1 = Math.floor(Math.random() * 5) + 2;
    const area = (a * (Math.pow(x1, 3) - Math.pow(x0, 3))) / 3;
    return {
      inputs: [{ a, x0, x1 }],
      solutions: [parseFloat(area.toFixed(2))],
    };
  },
};
