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
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
            console.log("Enqueued: ", newNode);
        } else {
            this.last.next = newNode;
            this.last = newNode;
            console.log("Enqueued: ", newNode);
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return "Queue is empty; nothing to dequeue: " + this.first;
        }
        if (this.first === this.last) {
            this.last = null;
        }
        console.log("Dequeued: ", this.first);
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

let myQueue = new Queue();
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.enqueue(5));
console.log(myQueue.peek());
console.log(myQueue.enqueue(10));
console.log(myQueue.enqueue(15));
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
