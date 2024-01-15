function rectangleInCircle(width, height, radius) {
    const diagonalLength = Math.sqrt(width ** 2 + height ** 2);
  
    const circleDiameter = radius * 2;
  
    return diagonalLength <= circleDiameter;
  }
  
  const result1 = rectangleInCircle(8, 6, 5);
  console.log(result1);
  
  const result2 = rectangleInCircle(5, 9, 5);
  console.log(result2);
  