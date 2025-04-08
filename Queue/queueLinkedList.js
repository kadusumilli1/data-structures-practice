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
            console.log("Enqueued: ", newNode);
        } else {
            const newNode = new Node(value);
            if (this.length === 1) {
                this.first.next = newNode;
            } else {
                this.last.next = newNode;
            }
            this.last = newNode;
            console.log("Enqueued: ", newNode);
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return "Queue is empty; nothing to dequeue: " + this.first;
        } else {
            const newFirst = this.first.next;
            console.log("Dequeued: ", this.first);
            this.first = newFirst;
            if (this.length === 1) {
                this.last = this.first;
            }
        }
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
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
