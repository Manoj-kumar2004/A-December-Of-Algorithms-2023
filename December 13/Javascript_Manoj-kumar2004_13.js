function textToNum(encodedPhoneNumber) {
    const letterToDigitMap = {
      A: 2, B: 2, C: 2,
      D: 3, E: 3, F: 3,
      G: 4, H: 4, I: 4,
      J: 5, K: 5, L: 5,
      M: 6, N: 6, O: 6,
      P: 7, Q: 7, R: 7, S: 7,
      T: 8, U: 8, V: 8,
      W: 9, X: 9, Y: 9, Z: 9,
    };
  
    const numericalPhoneNumber = encodedPhoneNumber.split('').map(char => {
      if (/\d/.test(char)) {
        return char;
      } else if (/[A-Z]/.test(char)) {
        return letterToDigitMap[char];
      } else {
        return char;
      }
    }).join('');
  
    return numericalPhoneNumber;
  }
  
  // Example usage
  console.log(textToNum("123-647-EYES"));     // Output: "123-647-3937"
  console.log(textToNum("(325)444-TEST"));    // Output: "(325)444-8378"
  console.log(textToNum("653-TRY-THIS"));     // Output: "653-879-8447"
  console.log(textToNum("435-224-7613"));    // Output: "435-224-7613"
  