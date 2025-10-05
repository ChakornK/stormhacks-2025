// rational functoin (asymptotes)
export default {
  generateText(inputs) {
    const { a, b, c, d } = inputs[0];
    return `Find the vertical asymptote of the rational function f(x) = (${a}x + ${b}) / (${c}x + ${d}).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 10) - 5;
    const c = Math.floor(Math.random() * 5) + 1;
    const d = Math.floor(Math.random() * 10) - 5;
    const va = -d / c;
    return {
      inputs: [{ a, b, c, d }],
      solutions: [parseFloat(va.toFixed(2))],
    };
  },
};
