function buildGraph(words) {
    const graph = {};
    for (let i = 0; i < words.length; i++) {
      graph[words[i]] = [];
      for (let j = i + 1; j < words.length; j++) {
        if (isOneLetterApart(words[i], words[j])) {
          graph[words[i]].push(words[j]);
          graph[words[j]].push(words[i]);
        }
      }
    }
    return graph;
  }
  
  function isOneLetterApart(word1, word2) {
    let diffCount = 0;
    for (let k = 0; k < word1.length; k++) {
      if (word1[k] !== word2[k]) {
        diffCount++;
      }
    }
    return diffCount === 1;
  }
  
  function bfs(graph, startWord) {
    const queue = [[startWord, [startWord]]];
    const visited = new Set();
  
    while (queue.length > 0) {
      const [currentWord, path] = queue.shift();
  
      if (path.length === Object.keys(graph).length) {
        return path;
      }
  
      for (const neighbor of graph[currentWord]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([neighbor, path.concat([neighbor])]);
        }
      }
    }
  
    return null;
  }
  
  function findOptimalSequence(words) {
    const graph = buildGraph(words);
  
    for (const startWord of words) {
      const result = bfs(graph, startWord);
      if (result) {
        return result;
      }
    }
  
    return null;
  }
  
  // Example usage
  const encodedWords = ["cat", "cot", "dot", "dog", "cog", "coat", "doll"];
  const optimalSequence = findOptimalSequence(encodedWords);
  
  if (optimalSequence) {
    console.log("Optimal Sequence:", optimalSequence);
  } else {
    console.log("No optimal sequence found.");
  }
  