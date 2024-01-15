function minTimeToInfect(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [];
    let time = 0;
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          queue.push([i, j]);
        }
      }
    }
  
  
    queue.push([-1, -1]);
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      if (current[0] === -1 && current[1] === -1) {

        if (queue.length > 0) {
          time++;
          queue.push([-1, -1]);
        }
      } else {
        for (const [dx, dy] of directions) {
          const newRow = current[0] + dx;
          const newCol = current[1] + dy;
  
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            grid[newRow][newCol] === 0
          ) {
        
            grid[newRow][newCol] = 1;
            queue.push([newRow, newCol]);
          }
        }
      }
    }
  

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 0) {
          return -1; 
        }
      }
    }
  
    return time;
  }
  

  const grid1 = [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, -1, 0],
    [0, 0, 0, 0]
  ];
  console.log(minTimeToInfect(grid1));
  