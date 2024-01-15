class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item, priority) {
      this.queue.push({ item, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.queue.shift().item;
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  function treasureHunt(graph, startCave, endCave) {
    const priorityQueue = new PriorityQueue();
    const distance = {};
    const path = {};
  
    for (const cave in graph) {
      distance[cave] = Infinity;
      path[cave] = [];
    }
  
    distance[startCave] = 0;
    priorityQueue.enqueue(startCave, 0);
  
    while (!priorityQueue.isEmpty()) {
      const currentCave = priorityQueue.dequeue();
  
      if (currentCave === endCave) {
        return path[currentCave].concat(endCave);
      }
  
      for (const [neighbor, weight] of Object.entries(graph[currentCave])) {
        const totalDistance = distance[currentCave] + weight;
        if (totalDistance < distance[neighbor]) {
          distance[neighbor] = totalDistance;
          priorityQueue.enqueue(neighbor, totalDistance);
          path[neighbor] = path[currentCave].concat(currentCave);
        }
      }
    }
  
    return null; 
  }
  

  const graph1 = {
    'Cave_A': { 'Cave_B': 3, 'Cave_C': 5 },
    'Cave_B': { 'Cave_D': 7, 'Cave_E': 1 },
    'Cave_C': { 'Cave_D': 3 },
    'Cave_D': { 'Cave_E': 5 },
    'Cave_E': {}
  };
  const startCave1 = 'Cave_A';
  const endCave1 = 'Cave_E';
  
  console.log(treasureHunt(graph1, startCave1, endCave1));  
  
  const graph2 = {
    'Cave_A': { 'Cave_B': 4, 'Cave_C': 6 },
    'Cave_B': { 'Cave_C': 2, 'Cave_D': 5, 'Cave_E': 8 },
    'Cave_C': { 'Cave_A': 6, 'Cave_D': 7 },
    'Cave_D': { 'Cave_B': 5, 'Cave_E': 3 },
    'Cave_E': {}
  };
  const startCave2 = 'Cave_B';
  const endCave2 = 'Cave_E';
  
  console.log(treasureHunt(graph2, startCave2, endCave2));  
  