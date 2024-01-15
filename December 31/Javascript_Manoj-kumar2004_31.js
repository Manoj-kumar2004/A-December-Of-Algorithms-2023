function solveNQueens(N) {
    const solutions = [];
  
    function isSafe(board, row, col) {
      for (let i = 0; i < row; i++) {
        if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row)) {
          return false;
        }
      }
      return true;
    }
  
    function placeQueens(board, row) {
      if (row === N) {
        solutions.push([...board]);
        return;
      }
  
      for (let col = 0; col < N; col++) {
        if (isSafe(board, row, col)) {
          board[row] = col;
          placeQueens(board, row + 1);
        }
      }
    }
  
    placeQueens(Array(N), 0);
  
    return solutions;
  }
  
 
  const N = 4;
  const solutions = solveNQueens(N);
  
  for (const solution of solutions) {
    console.log(solution.map((col, row) => `(${row + 1}, ${col + 1})`).join(' '));
  }
  