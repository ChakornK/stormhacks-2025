// velocity from displacement
export default {
  generateText(inputs) {
    return `A particle has displacement s(t) = ${inputs[0].a}t^2 + ${inputs[0].b}t. Find its velocity at t = ${inputs[0].t}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) + 1;
    const b = Math.floor(Math.random() * 5);
    const t = Math.floor(Math.random() * 5) + 1;
    const velocity = 2 * a * t + b;
    return {
      inputs: [{ a, b, t }],
      solutions: [parseFloat(velocity.toFixed(2))],
    };
  },
};
