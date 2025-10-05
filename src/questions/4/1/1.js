// population vs sample
export default {
  generateText(inputs) {
    return `A school has ${inputs[0].population} students. A random sample of ${inputs[0].sample} students is selected. What fraction of the total population does the sample represent?`;
  },
  generateValues() {
    const population = Math.floor(Math.random() * 500) + 100; // 100–600
    const sample = Math.floor(Math.random() * 50) + 10; // 10–60
    const fraction = sample / population;
    return {
      inputs: [{ population, sample }],
      solutions: [parseFloat(fraction.toFixed(3))],
    };
  },
};
