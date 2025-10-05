// vert translate
export default {
  generateText(inputs) {
    return `The function f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x + ${inputs[0].c} is translated vertically by ${inputs[0].k} units upwards. Find f(${inputs[0].x}) after the translation.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 10) - 5;
    const k = Math.floor(Math.random() * 10) + 1;
    const x = Math.floor(Math.random() * 5) + 1;
    const result = a * x * x + b * x + c + k;
    return { inputs: [{ a, b, c, k, x }], solutions: [result] };
  },
};
