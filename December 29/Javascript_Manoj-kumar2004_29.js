function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false;
    }
  
    const count = {
      n: 0,
      s: 0,
      e: 0,
      w: 0,
    };
  
    for (const direction of walk) {
      count[direction]++;
    }
  
    return count.n === count.s && count.e === count.w;
  }
  
 
  const walk1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
  console.log(isValidWalk(walk1));
  
  const walk2 = ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'n'];
  console.log(isValidWalk(walk2)); 
  