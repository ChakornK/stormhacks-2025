// word probem fn interp
export default {
  generateText(inputs) {
    return `The temperature in degrees Celsius is modeled by T(t) = ${inputs[0].a}t + ${inputs[0].b}, where t is hours after midnight. Find the temperature at ${inputs[0].t} hours.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 3) - 1;
    const b = Math.floor(Math.random() * 10) + 15;
    const t = Math.floor(Math.random() * 24);
    const result = a * t + b;
    return { inputs: [{ a, b, t }], solutions: [result] };
  },
};
