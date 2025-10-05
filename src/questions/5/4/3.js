// integration with boundary condition
export default {
  generateText(inputs) {
    return `Find C if ∫(${inputs[0].a}x + ${inputs[0].b}) dx from x=0 to ${inputs[0].x0} equals ${inputs[0].value}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) + 1;
    const x0 = Math.floor(Math.random() * 5) + 1;
    const value = Math.floor(Math.random() * 20) + 5;
    const integral = (a * x0 ** 2) / 2 + b * x0;
    const C = value - integral;
    return {
      inputs: [{ a, b, x0, value }],
      solutions: [parseFloat(C.toFixed(2))],
    };
  },
};
