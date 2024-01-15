function addAndConvertToBinary(a, b) {
    const sum = a + b;
    const binarySum = sum.toString(2);
    return binarySum;
  }
  
  const result1 = addAndConvertToBinary(1, 1);
  console.log(result1); 
  const result2 = addAndConvertToBinary(51, 12);
  console.log(result2);
  