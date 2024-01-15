function findStartingPoint(N, petrol, distance) {
    let start = 0;
    let currPetrol = 0;
    let totalPetrol = 0;
    let totalDistance = 0;
  
    for (let i = 0; i < N; i++) {
      totalPetrol += petrol[i];
      totalDistance += distance[i];
      currPetrol += petrol[i] - distance[i];
  
      if (currPetrol < 0) {
        currPetrol = 0;
        start = i + 1;
      }
    }
  
    return totalPetrol >= totalDistance ? start : -1;
  }
  
  
  const N = 4;
  const petrol = [4, 6, 7, 4];
  const distance = [6, 5, 3, 5];
  
  console.log(findStartingPoint(N, petrol, distance));  
  