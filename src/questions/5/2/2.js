// trig deriv
export default {
  generateText(inputs) {
    return `Find f'(x) for f(x) = ${inputs[0].a}sin(${inputs[0].b}x) at x = ${inputs[0].x} and determine its sign.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 3) + 1;
    const x = Math.floor(Math.random() * 4) + 1;
    const derivative = a * b * Math.cos(b * x);
    const sign = derivative > 0 ? 1 : derivative < 0 ? -1 : 0;
    return {
      inputs: [{ a, b, x }],
      solutions: [parseFloat(derivative.toFixed(2)), sign],
    };
  },
};
