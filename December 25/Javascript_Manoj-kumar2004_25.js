function minTimeToCompleteTasks(tasks, dependencies) {
    const graph = new Map();
    const inDegree = new Array(tasks.length).fill(0);
  
    for (let i = 0; i < tasks.length; i++) {
      graph.set(i, []);
    }
  
    for (let i = 0; i < dependencies.length; i++) {
      for (const dep of dependencies[i]) {
        graph.get(dep).push(i);
        inDegree[i]++;
      }
    }
  
    const queue = [];
    for (let i = 0; i < inDegree.length; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);
      }
    }
  
    let time = 0;
    while (queue.length > 0) {
      const current = queue.shift();
      for (const dependent of graph.get(current)) {
        inDegree[dependent]--;
        if (inDegree[dependent] === 0) {
          queue.push(dependent);
        }
      }
      time++;
    }
  
    return time;
  }
  
  
  const tasks1 = [1, 2, 3, 4, 5];
  const dependencies1 = [[], [1], [2], [3], [4, 1]];
  console.log(minTimeToCompleteTasks(tasks1, dependencies1)); 
  

  const tasks2 = [1, 2, 3, 4, 5];
  const dependencies2 = [[], [1], [2], [3], [4]];
  console.log(minTimeToCompleteTasks(tasks2, dependencies2));  
  