class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // insert node in to the tree - iterative
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // go left
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    // continue loop until you reach 
                    // a node whose left is null
                    currentNode = currentNode.left;
                } else {
                    // go right
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        return this;
                    }
                    // continue loop until you reach 
                    // a node whose right is null
                    currentNode = currentNode.right;
                }
            }
        }
    }

    // insert node in to the tree - recursive
    // T.C. - O(n) and S.C. - O(n) vs O(1) in iterative
    // insert(value) {
    //     const newNode = new Node(value);
    //     if (this.root === null) {
    //         this.root = newNode;
    //     } else {
    //         this._insertNode(this.root, newNode)
    //     }
    //     return this;
    // }

    // _insertNode(current, newNode) {
    //     if (newNode.value < current.value) {
    //         if (current.left === null) {
    //             current.left = newNode;
    //         }
    //         else {
    //             this._insertNode(current.left, newNode)
    //         }
    //     } else {
    //         if (current.right === null) {
    //             current.right = newNode;
    //         }
    //         else {
    //             this._insertNode(current.right, newNode)
    //         }
    //     }
    // }
}

let tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
// console.log(tree.lookup(20));

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}