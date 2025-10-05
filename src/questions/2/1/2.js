// vertex form
export default {
  generateText(inputs) {
    const { a, h, k } = inputs[0];
    return `Compute the y-value of the quadratic function f(x) = ${a}(x - ${h})^2 + ${k} at x = ${
      h + 2
    }.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const h = Math.floor(Math.random() * 10) - 5;
    const k = Math.floor(Math.random() * 10) - 5;
    const x = h + 2;
    const y = a * Math.pow(x - h, 2) + k;
    return {
      inputs: [{ a, h, k }],
      solutions: [y],
    };
  },
};
