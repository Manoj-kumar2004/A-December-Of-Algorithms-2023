function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    let freshOranges = 0;
    const queue = [];
  

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          freshOranges++;
        } else if (grid[i][j] === 2) {
          queue.push([i, j]);
        }
      }
    }
  
    let minutes = 0;
 
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
    while (queue.length > 0 && freshOranges > 0) {
      const currentQueueSize = queue.length;
  
      for (let i = 0; i < currentQueueSize; i++) {
        const [currentRow, currentCol] = queue.shift();
  
        for (const [dx, dy] of directions) {
          const newRow = currentRow + dx;
          const newCol = currentCol + dy;
  
          if (
            newRow >= 0 &&
            newRow < rows &&
            newCol >= 0 &&
            newCol < cols &&
            grid[newRow][newCol] === 1
          ) {
            grid[newRow][newCol] = 2;
            queue.push([newRow, newCol]);
            freshOranges--;
          }
        }
      }
  
      if (queue.length > 0) {
        minutes++;
      }
    }
  
    return freshOranges === 0 ? minutes : -1;
  }
  
 
  const grid1 = [[0, 1, 2], [0, 1, 2], [2, 1, 1]];
  console.log(orangesRotting(grid1));  
  
  const grid2 = [[2, 2, 0, 1]];
  console.log(orangesRotting(grid2));  
  