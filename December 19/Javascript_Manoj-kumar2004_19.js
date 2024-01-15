function symbolicSum(sequence) {
    let index = 0; 
  
    function calculateSum() {
      let sum = 0;
      let multiplier = 1;
  
      while (index < sequence.length) {
        const current = sequence[index++];
  
        if (typeof current === 'number') {
          sum += current;
        } else if (typeof current === 'string' && current[0] === 'X') {
          const k = parseInt(current.slice(1)) || 1;
          const subsequenceSum = calculateSum(); 
          sum += k * subsequenceSum;
        }
      }
  
      return sum;
    }
  
    return calculateSum();
  }
  
  // Example usage
  const input1 = ['X3', 3, 'X2', 2, 'X1', 1, 4];
  console.log(symbolicSum(input1)); 
  
  const input2 = ['X2', 1, 'X3', 2, 3, 'X2', 4, 'X1', 5];
  console.log(symbolicSum(input2)); 