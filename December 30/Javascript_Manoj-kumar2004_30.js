function solveQueries(N, Q, A, edges, queries) {
    const tree = Array.from({ length: N + 1 }, () => []);
    const colors = Array(N + 1).fill(0);
    const result = [];
  
    for (const [x, y] of edges) {
      tree[x].push(y);
      tree[y].push(x);
    }
  
    function dfs(node, parent, colorCount) {
      let inversions = 0;
      colorCount[A[node]]++;
  
      for (const neighbor of tree[node]) {
        if (neighbor !== parent) {
          inversions += dfs(neighbor, node, [...colorCount]);
        }
      }
  
      for (const [queryX, queryY] of queries) {
        if (node === queryX) {
          const colorDiff = colorCount[A[queryY]];
          result.push(inversions + colorDiff);
        } else if (node === queryY) {
          const colorDiff = colorCount[A[queryX]];
          result.push(inversions + colorDiff);
        }
      }
  
      return inversions;
    }
  
    dfs(1, 0, []);
  
    return result;
  }
  
  // Sample Input/Output
  const T = 1;
  const testCases = [
    {
      N: 8,
      Q: 7,
      A: [1, 2, 3, 1, 2, 1, 3, 1],
      edges: [
        [1, 2],
        [1, 3],
        [2, 4],
        [3, 5],
        [3, 6],
        [5, 7],
        [6, 8],
      ],
      queries: [
        [4, 6],
        [7, 8],
        [5, 4],
        [7, 6],
        [3, 8],
        [1, 2],
        [4, 8],
      ],
    },
  ];
  
  for (let i = 0; i < T; i++) {
    const { N, Q, A, edges, queries } = testCases[i];
    const result = solveQueries(N, Q, A, edges, queries);
    result.forEach((res) => console.log(res));
  }
  