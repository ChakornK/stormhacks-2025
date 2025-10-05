// vol of cone
export default {
  generateText(inputs) {
    return `Find the volume of a right circular cone with radius r = ${inputs[0].r} and height h = ${inputs[0].h}.`;
  },
  generateValues() {
    const r = Math.floor(Math.random() * 10) + 1;
    const h = Math.floor(Math.random() * 20) + 5;
    const volume = (1 / 3) * Math.PI * r * r * h;
    return { inputs: [{ r, h }], solutions: [parseFloat(volume.toFixed(2))] };
  },
};
