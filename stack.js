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

    peek() {
    }
    // push element onto the stack
    push(value) {
    }

    pop() {
    }

    //isEmpty
}

let myStack = new Stack();
myStack.push(5);
console.log(myStack);
myStack.push(10);
console.log(myStack);

