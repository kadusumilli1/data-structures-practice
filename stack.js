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
            return this.top;
        } else {
            return "stack is empty"
        }
    }
    // push element onto the stack
    push(value) {
        if (this.length === 0) {
            this.bottom = value;
            this.top = this.bottom;
        } else {
            this.top = value;
        }
        this.length++;
        return this;
    }

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
