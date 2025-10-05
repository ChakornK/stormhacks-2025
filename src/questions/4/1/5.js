// 1.5xIQR rule for outliers
export default {
  generateText(inputs) {
    return `For a data set with Q1 = ${inputs[0].Q1}, Q3 = ${inputs[0].Q3}, find the upper bound for detecting outliers using the 1.5 × IQR rule.`;
  },
  generateValues() {
    const Q1 = Math.floor(Math.random() * 50) + 10;
    const Q3 = Q1 + Math.floor(Math.random() * 20) + 5;
    const IQR = Q3 - Q1;
    const upperBound = Q3 + 1.5 * IQR;
    return {
      inputs: [{ Q1, Q3 }],
      solutions: [parseFloat(upperBound.toFixed(2))],
    };
  },
};
