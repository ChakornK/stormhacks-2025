// composite function
export default {
  generateText(inputs) {
    return `If f(x) = ${inputs[0].fa}x + ${inputs[0].fb} and g(x) = ${inputs[0].ga}x + ${inputs[0].gb}, compute f(g(${inputs[0].x})).`;
  },
  generateValues() {
    const fa = Math.floor(Math.random() * 5) + 1;
    const fb = Math.floor(Math.random() * 5);
    const ga = Math.floor(Math.random() * 5) + 1;
    const gb = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 10) + 1;
    const result = fa * (ga * x + gb) + fb;
    return { inputs: [{ fa, fb, ga, gb, x }], solutions: [result] };
  },
};
