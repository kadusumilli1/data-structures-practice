class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  // insert value at an index
  // indexes start from 0
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    else if (index === this.length) {
      this.append(value);
    }
    else {
      let prevNode = this.traverse(index - 1)
      let currentNode = prevNode.next;
      const newNode = new Node(value);
      prevNode.next = newNode;
      newNode.next = currentNode;
      this.length++;
    }
  }
  // traverse the linked list 
  // to a given index
  traverse(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // add value at the tail
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  // add value at the head
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  // traverse and print all values
  display() {
    const array = []
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.prepend(5);
myLinkedList.append(20);
myLinkedList.append(25);
console.log(myLinkedList.display());
myLinkedList.insert(0, 5);
console.log(myLinkedList.display());
myLinkedList.insert(myLinkedList.length, 50);
console.log(myLinkedList.display());
myLinkedList.insert(1, 6);
console.log(myLinkedList.display());
myLinkedList.insert(2, 9);
console.log(myLinkedList.display());
myLinkedList.insert(4, 18);
console.log(myLinkedList.display());
console.log(myLinkedList);
