function generateProductFrequency(productIds) {
    const frequencyMap = {};
  
    for (const productId of productIds) {
      if (frequencyMap[productId]) {
        frequencyMap[productId]++;
      } else {
        frequencyMap[productId] = 1;
      }
    }
  
    const frequencyArray = Object.entries(frequencyMap).map(([productId, frequency]) => ({
      productId,
      frequency,
    }));
  
    return frequencyArray;
  }
  
  // Example usage
  const productIds = ["P1", "P2", "P1", "P3", "P2", "P1", "P4", "P2", "P3"];
  const productFrequency = generateProductFrequency(productIds);
  
  console.log("Product Frequency:");
  console.log(productFrequency);
  