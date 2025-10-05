// deg -> rad
export default {
  generateText(inputs) {
    return `Convert ${inputs[0].deg}° to radians.`;
  },
  generateValues() {
    const deg = Math.floor(Math.random() * 360) + 1;
    const rad = (deg * Math.PI) / 180;
    return { inputs: [{ deg }], solutions: [parseFloat(rad.toFixed(3))] };
  },
};
