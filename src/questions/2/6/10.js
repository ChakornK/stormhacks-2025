// rate of change from linear model
export default {
  generateText(inputs) {
    return `The distance travelled by a car is given by d(t) = ${inputs[0].m}t + ${inputs[0].c}. Find the speed of the car.`;
  },
  generateValues() {
    const m = Math.floor(Math.random() * 20) + 5;
    const c = Math.floor(Math.random() * 10);
    return { inputs: [{ m, c }], solutions: [m] };
  },
};
