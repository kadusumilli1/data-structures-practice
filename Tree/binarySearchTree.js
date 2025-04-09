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

    // insert node in to the tree
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else if (value > this.root.value) {
            if (this.root.right === null) {
                let rootNode = this.root;
                rootNode.right = newNode;
                newNode = this.root
            }
            else {
                const prevRootNode = this.root;
                this.root = this.root.right;
                // update root and insert 
                this.insert(value);
                // always go back to the original root
                this.root = prevRootNode;
            }
        } else {
            if (this.root.left === null) {
                let rootNode = this.root;
                rootNode.left = newNode;
                newNode = this.root;
            }
            else {
                const prevRootNode = this.root;
                this.root = this.root.left;
                // update root and insert 
                this.insert(value);
                // always go back to the original root
                this.root = prevRootNode;
            }
        }
    }
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