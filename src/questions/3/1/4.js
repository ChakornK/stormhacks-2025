// sa of sphere
export default {
  generateText(inputs) {
    return `Find the surface area of a sphere with radius r = ${inputs[0].r}.`;
  },
  generateValues() {
    const r = Math.floor(Math.random() * 10) + 1;
    const surfaceArea = 4 * Math.PI * r * r;
    return { inputs: [{ r }], solutions: [parseFloat(surfaceArea.toFixed(2))] };
  },
};
