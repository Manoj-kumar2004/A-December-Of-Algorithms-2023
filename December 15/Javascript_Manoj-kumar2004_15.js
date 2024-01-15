function countDistinctSubsequences(input) {
    const n = input.length;
    const mod = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    const lastOccurrence = new Map();
  
    for (let i = 1; i <= n; i++) {
      dp[i] = (2 * dp[i - 1]) % mod;
      if (lastOccurrence.has(input[i - 1])) {
        dp[i] = (dp[i] - dp[lastOccurrence.get(input[i - 1]) - 1] + mod) % mod;
      }
      lastOccurrence.set(input[i - 1], i);
    }
  
    return dp[n];
  }
  
  console.log(countDistinctSubsequences("ghg")); // Output: 7
  console.log(countDistinctSubsequences("ice")); // Output: 8
  