function countViolations(n, arr) {
    let violations = 0;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
          violations++;
        }
      }
    }
  
    return violations;
  }

  const n1 = 5;
  const arr1 = [4, 5, 6, 7, 1];
  console.log(countViolations(n1, arr1));
  
  const n2 = 5;
  const arr2 = [5, 4, 3, 2, 1];
  console.log(countViolations(n2, arr2)); 
  