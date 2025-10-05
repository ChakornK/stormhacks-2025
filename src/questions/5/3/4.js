// kinematics (velocity)
export default {
  generateText(inputs) {
    return `For displacement s(t) = ${inputs[0].a}t^2 + ${inputs[0].b}t + ${inputs[0].c}, find the velocity v(t) at t = ${inputs[0].t}.`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 5);
    const t = Math.floor(Math.random() * 5) + 1;
    const velocity = 2 * a * t + b;
    return {
      inputs: [{ a, b, c, t }],
      solutions: [parseFloat(velocity.toFixed(2))],
    };
  },
};
