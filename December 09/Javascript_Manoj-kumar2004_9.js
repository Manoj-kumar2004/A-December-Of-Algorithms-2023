function countWordsInCamelCase(s) {
    if (!s || s.length === 0) {
      return 0;
    }
  
    let wordCount = 1;
    for (let i = 0; i < s.length; i++) {
      const currentChar = s.charAt(i);
  
      if (currentChar === currentChar.toUpperCase()) {
        wordCount++;
      }
    }
  
    return wordCount;
  }
  
  const result = countWordsInCamelCase("SaveChangesInTheEditor");
  console.log(result);
  