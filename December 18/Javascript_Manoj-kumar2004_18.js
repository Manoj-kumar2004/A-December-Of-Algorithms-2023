const MOD = 1000000007;

function dfs(node, parent, X, arr, dp, prefix, result) {
  let ways = 0;
  let count = new Array(X).fill(0);
  count[prefix % X] += 1;

  for (const child of dp[node]) {
    if (child === parent) continue;
    ways += dfs(child, node, X, arr, dp, (prefix + arr[child - 1]) % X, result);
    for (let i = 0; i < X; i++) {
      count[i] += result[child][i];
    }
  }

  result[node] = count;
  return ways + count[0];
}

function solveTreeCutting(T, testCases) {
  for (let t = 0; t < T; t++) {
    const N = testCases[t][0];
    const X = testCases[t][1];
    const arr = testCases[t][2];
    const dp = new Array(N + 1).fill().map(() => []);

    for (let i = 3; i < N + 2; i++) {
      const [u, v] = testCases[t][i];
      dp[u].push(v);
      dp[v].push(u);
    }

    const result = new Array(N + 1).fill().map(() => new Array(X).fill(0));
    const answer = new Array(N).fill(0);

    dfs(1, 0, X, arr, dp, 0, result);

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < X; j++) {
        answer[i] += result[i + 1][j];
      }
    }

    console.log(answer.join(' '));
  }
}

const T = 2;
const testCases = [
  [5, 3, [3, 2, 3, 2, 5], [1, 2], [1, 3], [2, 4], [2, 5]],
  [5, 1, [1, 2, 3, 4, 5], [1, 2], [1, 5], [2, 3], [2, 4]],
];

solveTreeCutting(T, testCases);
