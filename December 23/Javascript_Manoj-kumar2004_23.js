function minRotationTime(n, dominoes) {
    let upperSum = 0;
    let lowerSum = 0;
  
    for (let i = 0; i < n; i++) {
      const [upper, lower] = dominoes[i];
      upperSum += upper;
      lowerSum += lower;
    }
  
    if (upperSum % 2 === 0 && lowerSum % 2 === 0) {
      return 0;
    } else if ((upperSum % 2 === 1 && lowerSum % 2 === 0) || (upperSum % 2 === 0 && lowerSum % 2 === 1)) {
      return -1;
    } else {
      for (let i = 0; i < n; i++) {
        const [upper, lower] = dominoes[i];
        if (upper % 2 !== lower % 2) {
          return 1;
        }
      }
      return -1;
    }
  }
  

  const n1 = 2;
  const dominoes1 = [
    [4, 2],
    [6, 4]
  ];
  console.log(minRotationTime(n1, dominoes1));  
  
  const n2 = 1;
  const dominoes2 = [
    [2, 3]
  ];
  console.log(minRotationTime(n2, dominoes2));  
  