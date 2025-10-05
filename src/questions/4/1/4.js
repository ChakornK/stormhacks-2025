// interquartile range from box plot
export default {
  generateText(inputs) {
    return `In a box plot, Q1 = ${inputs[0].Q1}, Q3 = ${inputs[0].Q3}. Find the interquartile range (IQR).`;
  },
  generateValues() {
    const Q1 = Math.floor(Math.random() * 50) + 10;
    const Q3 = Q1 + Math.floor(Math.random() * 20) + 5;
    const IQR = Q3 - Q1;
    return { inputs: [{ Q1, Q3 }], solutions: [IQR] };
  },
};
