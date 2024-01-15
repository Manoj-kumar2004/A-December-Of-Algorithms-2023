function binarySearch(box, searchElement) {
    let left = 0;
    let right = box.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (box[mid] === searchElement) {
        return `The Box containing ${searchElement} is Box ${box === box1 ? 1 : box === box2 ? 2 : box === box3 ? 3 : '?'}.`;
      } else if (box[mid] < searchElement) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return `${searchElement} not found in the given box.`;
  }
  
  const box2 = ["Gold", "Diamond", "Ruby", "Copper"];
  const result = binarySearch(box2, "Gold");
  console.log(result);
  