class Stack {
    constructor() {
        this.stackArray = new Array();
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // see top element of the stack
    peek() {
        if (this.stackArray.length === 0) {
            return "stack is empty: " + this.top;
        }
    }
    // push element onto the stack
    push(value) {
        if (this.stackArray.length === 0) {
            this.stackArray.push(value);
            this.top = value;
            this.bottom = value;
        } else {
            this.stackArray.push(value);
            this.top = this.stackArray.at(-1);
            this.bottom = this.stackArray.at(0);
        }
        this.length++;
        return this.stackArray;
    }
    // remove top element from the stack
    pop() {
        if (this.stackArray.length === 0) {
            return "stack is empty: " + this.top;
        } else {
            const poppedElement = this.stackArray.pop();
            console.log("Popped", poppedElement + " from the stack")
            if (this.stackArray.at(-1)) {
                this.top = this.stackArray.at(-1);
            } else {
                // when last element is popped
                // set top and bottom to null
                this.top = null;
                this.bottom = null;
            }
        }
        this.length--;
        return this.stackArray;
    }
}


let myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push(5);
console.log(myStack);
myStack.push(10);
console.log(myStack);
myStack.push(15);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
