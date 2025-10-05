// two-part question: calculate Pearson correlation coefficient and classify strength
export default {
  generateText(inputs) {
    return `For X = ${inputs[0].X.join(", ")} and Y = ${inputs[0].Y.join(
      ", "
    )}, calculate the Pearson correlation coefficient r. 
Classify the strength numerically: 1 = strong, 2 = moderate, 3 = weak.`;
  },
  generateValues() {
    const n = 5;
    const X = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 10) + 1
    );
    const Y = Array.from(
      { length: n },
      () => Math.floor(Math.random() * 10) + 1
    );

    const meanX = X.reduce((a, b) => a + b, 0) / n;
    const meanY = Y.reduce((a, b) => a + b, 0) / n;

    let num = 0,
      denX = 0,
      denY = 0;
    for (let i = 0; i < n; i++) {
      num += (X[i] - meanX) * (Y[i] - meanY);
      denX += (X[i] - meanX) ** 2;
      denY += (Y[i] - meanY) ** 2;
    }

    const r = num / Math.sqrt(denX * denY);

    // Classification: 1 = strong, 2 = moderate, 3 = weak
    let classification;
    const absR = Math.abs(r);
    if (absR >= 0.7) classification = 1;
    else if (absR >= 0.4) classification = 2;
    else classification = 3;

    return {
      inputs: [{ X, Y }],
      solutions: [parseFloat(r.toFixed(3)), classification],
    };
  },
};
