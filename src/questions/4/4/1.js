// simple prob
export default {
  generateText(inputs) {
    return `A bag contains ${inputs[0].red} red balls and ${inputs[0].blue} blue balls. One ball is drawn at random. What is the probability it is red?`;
  },
  generateValues() {
    const red = Math.floor(Math.random() * 10) + 1;
    const blue = Math.floor(Math.random() * 10) + 1;
    const prob = red / (red + blue);
    return {
      inputs: [{ red, blue }],
      solutions: [parseFloat(prob.toFixed(3))],
    };
  },
};
