export default {
    generateText(inputs) {
        return `Solve for x + ${inputs[0]} = 9`
    },
    generateValues() {
        const a = Math.floor(Math.random() * 25)
        return {
            inputs: [a],
            solutions: [9-a]
        }
    }
}