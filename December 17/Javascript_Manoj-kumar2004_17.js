class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    detectAndRemoveLoop() {
      let slow = this.head;
      let fast = this.head;
  

      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
       
          break;
        }
      }
  

      if (!fast || !fast.next) {
        return this.head;
      }
  
 
      slow = this.head;
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
  
      fast.next = null;
  
      return this.head;
    }
  
    printList() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  

  const linkedList = new LinkedList();
  linkedList.addNode(1);
  linkedList.addNode(2);
  linkedList.addNode(3);
  linkedList.addNode(4);
  linkedList.addNode(5);
  

  linkedList.head.next.next.next.next.next = linkedList.head.next;

  linkedList.detectAndRemoveLoop();
  

  linkedList.printList();
  