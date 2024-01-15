function find_path(n) {
    // Check if n is odd
    if (n % 2 === 0) {
      throw new Error("Input must be an odd integer.");
    }
  
    // Initialize the magic square with zeros
    const magicSquare = Array.from({ length: n }, () => Array(n).fill(0));
  
    // Initialize position for 1
    let i = 0;
    let j = Math.floor(n / 2);
  
    // Fill the magic square
    for (let num = 1; num <= n * n; num++) {
      magicSquare[i][j] = num;
  
      i--;
      j++;
  
      if (i < 0) {
        i = n - 1;
      }
  
      if (j === n) {
        j = 0;
      }
  
      if (magicSquare[i][j] !== 0) {
        i += 2;
        j--;
  
        if (i >= n) {
          i -= n;
        }
      }
    }
  
    return magicSquare;
  }
  
  // Example usage
  const result1 = find_path(3);
  console.log(result1);
  
  const result2 = find_path(5);
  console.log(result2);
  