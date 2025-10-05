// deriv + inc/dec
export default {
  generateText(inputs) {
    return `For f(x) = ${inputs[0].m}x + ${inputs[0].c}, determine f'(x) and state if the function is increasing (1), decreasing (-1), or stationary (0).`;
  },
  generateValues() {
    const m = Math.floor(Math.random() * 11) - 5; // -5 to 5 slope
    const c = Math.floor(Math.random() * 10) - 3; // constant term
    const derivative = m;
    let sign;
    if (derivative > 0) sign = 1;
    else if (derivative < 0) sign = -1;
    else sign = 0;
    return { inputs: [{ m, c }], solutions: [derivative, sign] };
  },
};
