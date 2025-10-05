// interval diff (change over time)
export default {
  generateText(inputs) {
    return `The stock price is modeled by P(t) = ${inputs[0].a}t^2 + ${inputs[0].b}t + ${inputs[0].c}. Find the change in price from t = ${inputs[0].t1} to t = ${inputs[0].t2}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 2) + 1;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 10);
    const t1 = Math.floor(Math.random() * 5) + 1;
    const t2 = t1 + Math.floor(Math.random() * 5) + 1;
    const change = a * t2 * t2 + b * t2 + c - (a * t1 * t1 + b * t1 + c);
    return { inputs: [{ a, b, c, t1, t2 }], solutions: [change] };
  },
};
