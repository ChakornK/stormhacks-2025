// deriv + inc/dec
export default {
  generateText(inputs) {
    return `For f(x) = ${inputs[0].a}x^2 + ${inputs[0].b}x + ${inputs[0].c}, determine f'(x) at x = ${inputs[0].x} and the sign of f'(x) (1 for increasing, -1 for decreasing, 0 for stationary).`;
  },
  generateValues() {
    const a = Math.floor(Math.random() * 5) - 2;
    const b = Math.floor(Math.random() * 5) - 2;
    const c = Math.floor(Math.random() * 5);
    const x = Math.floor(Math.random() * 5) + 1;
    const derivative = 2 * a * x + b;
    let sign;
    if (derivative > 0) sign = 1;
    else if (derivative < 0) sign = -1;
    else sign = 0; // stationary point
    return {
      inputs: [{ a, b, c, x }],
      solutions: [parseFloat(derivative.toFixed(2)), sign],
    };
  },
};
