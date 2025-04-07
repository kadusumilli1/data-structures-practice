class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            let prevNode = this.traverse(index - 1);
            let currentNode = prevNode.next;
            const newNode = new Node(value);
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = currentNode;
            currentNode.prev = newNode;
            this.length++;
        }
        return this;
    }
    // remove the node at
    // an index
    remove(index) {
        if (index === 0) {
            let newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
        }
        else if (index === this.length - 1) {
            let newTail = this.traverse(index - 1);
            newTail.next = null;
            this.tail = newTail;
        }
        else {
            let prevNode = this.traverse(index - 1);
            let nodeToBeRemoved = prevNode.next;
            prevNode.next = nodeToBeRemoved.next;
            nodeToBeRemoved.next.prev = nodeToBeRemoved.prev;
        }
        this.length--;
        return this;
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
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    // add value at the head
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
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

let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(15);
myDoublyLinkedList.prepend(5);
myDoublyLinkedList.append(20);
myDoublyLinkedList.append(25);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.insert(0, 5);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.insert(myDoublyLinkedList.length, 50);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.insert(1, 6);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.insert(2, 9);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.insert(4, 18);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.remove(0);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.remove(3);
console.log(myDoublyLinkedList.display());
myDoublyLinkedList.remove(myDoublyLinkedList.length - 1);
console.log(myDoublyLinkedList.display());
console.log(myDoublyLinkedList);
