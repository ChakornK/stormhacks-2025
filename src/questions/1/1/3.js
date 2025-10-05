// compound interest
export default {
  generateText(inputs) {
    return `An initial investment of \\($${inputs[0].P}\\) grows at an annual rate of ${inputs[0].r}\\% compounded ${inputs[0].n} time(s) per year. Find the value after ${inputs[0].t} year(s).`;
  },
  generateValues() {
    const P = Math.floor(Math.random() * 900) + 100;
    const r = Math.floor(Math.random() * 5) + 2;
    const n = 1;
    const t = Math.floor(Math.random() * 5) + 1;
    return {
      inputs: [{ P, r, n, t }],
      solutions: [P * Math.pow(1 + r / 100, t)],
    };
  },
};
