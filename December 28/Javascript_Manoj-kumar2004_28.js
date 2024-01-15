function maxGadgetsSold(x, z, items, clients) {
    items.sort((a, b) => b.m - a.m); // Sort items by performance level in descending order
    clients.sort((a, b) => a.k - b.k); // Sort clients by desired performance level in ascending order
  
    let gadgetsSold = 0;
  
    for (let i = 0; i < z; i++) {
      const client = clients[i];
  
      for (let j = 0; j < x; j++) {
        const item = items[j];
  
        if (item.m > client.k || item.n > client.r) {
          continue;
        }
  
        gadgetsSold++;
        items.splice(j, 1); // Remove the sold item
        x--; // Decrease the number of available items
        break;
      }
    }
  
    return gadgetsSold;
  }
  
  
  const x = 3;
  const z = 3;
  const items = [
    { k: 10, r: 100, m: 5, n: 110 },
    { k: 9, r: 200, m: 2, n: 200 },
    { k: 20, r: 300, m: 30, n: 300 },
  ];
  
  const clients = [
    { k: 5, r: 110 },
    { k: 9, r: 500 },
    { k: 20, r: 400 },
  ];
  
  console.log(maxGadgetsSold(x, z, items, clients)); 
  