function findPalindromicSubstring(input) {
   
    let smallestPalindrome = input[0];
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j <= input.length; j++) {
        const substring = input.slice(i, j);
        if (isPalindrome(substring) ) {
          if(substring.length > 1){
         
          smallestPalindrome = substring;
           
          }
          
        }
      }
    }
    
    return smallestPalindrome.length > 1 ? smallestPalindrome : "Error";
  }
  function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }

  
  console.log(findPalindromicSubstring("Hollow"));
  