function decryptCaesarCipher(code, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    let decryptedMessage = '';
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      if (char === ' ') {
        decryptedMessage += ' ';
      } else {
        const charIndex = alphabet.indexOf(char);
        const decryptedIndex = (charIndex - shift + 26) % 26;
        decryptedMessage += alphabet[decryptedIndex];
      }
    }
  
    return decryptedMessage;
  }
  
  const code = prompt('Enter code: ');
  console.log('The Bomb location is:', decryptCaesarCipher(code, 25 - 0));
  