class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // see top element on the stack
    peek() {
        if (this.length > 0) {
            return this.top.value;
        } else {
            return "stack is empty"
        }
    }
    // push element onto the stack
    push(value) {
        if (this.length === 0) {
            this.bottom = new Node(value);
            this.top = this.bottom;
        } else {
            const newNode = new Node(value);
            if (this.length === 1) {
                newNode.next = this.bottom;
            } else {
                newNode.next = this.top;
            }
            this.top = newNode;
        }
        this.length++;
        return this;
    }
    // remove top element from the stack
    pop() {
    }

    //isEmpty
}

let myStack = new Stack();
console.log(myStack.peek());
myStack.push(5);
console.log(myStack);
myStack.push(10);
console.log(myStack);
myStack.push(15);
console.log(myStack.peek());
console.log(myStack);
