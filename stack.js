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
myStack.push(5);
console.log(myStack);
myStack.push(10);
console.log(myStack);

