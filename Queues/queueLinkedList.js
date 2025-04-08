class Node {
    constructor(value) {
        this.vlaue = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        if (this.length === 0) {
            return "Queue is empty: " + this.first;
        } else {
            return this.first;
        }
    }

    enqueue(value) {
        if (this.length === 0) {
            const newNode = new Node(value);
            this.first = newNode;
            this.last = newNode;
        } else {
            const newNode = new Node(value);
            this.first.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // dequeue() {

    // }
}

let myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.enqueue(5));
console.log(myQueue.peek());
console.log(myQueue.enqueue(10));
