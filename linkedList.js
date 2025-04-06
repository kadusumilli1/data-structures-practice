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
    newNode.next = this.head
    this.head = newNode
    this.length++;
    return this;
  }
  // traverse and print all values
  display() {
    let currentNode = this.head
    while (currentNode.next != null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(currentNode.value)
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(15);
myLinkedList.prepend(5);
myLinkedList.append(20)
myLinkedList.append(25)
myLinkedList.display();
console.log(myLinkedList);
