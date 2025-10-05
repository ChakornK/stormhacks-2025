// word problem
export default {
  generateText(inputs) {
    const { costPerItem, budget } = inputs[0];
    return `If each item costs \\$${costPerItem}, find the maximum number of items that can be bought with \\$${budget}.`;
  },
  generateValues() {
    const costPerItem = Math.floor(Math.random() * 10) + 2;
    const budget = Math.floor(Math.random() * 100) + 20;
    const maxItems = Math.floor(budget / costPerItem);
    return {
      inputs: [{ costPerItem, budget }],
      solutions: [maxItems],
    };
  },
};
