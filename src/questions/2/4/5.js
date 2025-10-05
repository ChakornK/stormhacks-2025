// composite transformation
export default {
  generateText(inputs) {
    return `The function f(x) = ${inputs[0].a}x^2 is translated ${inputs[0].h} units right, then reflected across the x-axis. Find f(${inputs[0].x}) after the transformations.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const h = Math.floor(Math.random() * 5) + 1;
    const x = Math.floor(Math.random() * 5) + 1;
    const result = -a * Math.pow(x - h, 2);
    return { inputs: [{ a, h, x }], solutions: [result] };
  },
};
