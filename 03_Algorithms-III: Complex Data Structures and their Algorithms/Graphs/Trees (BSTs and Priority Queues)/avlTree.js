// Define the Node structure for the AVL Tree
class Node {
    constructor(value) {
        this.value = value;   // Node's value
        this.left = null;     // Left child
        this.right = null;    // Right child
        this.height = 1;      // Height is used to calculate balance factor
    }
}

// Define the AVL Tree structure with key methods
class AVLTree {
    constructor() {
        this.root = null;    // Root node of the AVL Tree
    }

    // Helper function to get the height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Helper function to get the balance factor of a node
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Perform a right rotation to balance the tree
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return the new root after rotation
        return x;
    }

    // Perform a left rotation to balance the tree
    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return the new root after rotation
        return y;
    }

    // Insert a new value into the AVL Tree
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    // Recursive function to insert a value and balance the tree
    _insert(node, value) {
        // Step 1: Perform standard BST insert
        if (!node) {
            return new Node(value);  // If empty spot, insert here
        }

        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else if (value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node;  // Duplicate values are not allowed in this AVL Tree
        }

        // Step 2: Update the height of the ancestor node
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // Step 3: Get the balance factor to check if the node is unbalanced
        const balance = this.getBalanceFactor(node);

        // Step 4: Perform rotations to balance the node if necessary

        // Left-Left (Right Rotation)
        if (balance > 1 && value < node.left.value) {
            return this.rotateRight(node);
        }

        // Right-Right (Left Rotation)
        if (balance < -1 && value > node.right.value) {
            return this.rotateLeft(node);
        }

        // Left-Right (Left-Right Rotation)
        if (balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right-Left (Right-Left Rotation)
        if (balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        // Return the unchanged node pointer
        return node;
    }

    // In-order traversal of the tree
    inOrderTraversal(node = this.root, result = []) {
        if (node) {
            this.inOrderTraversal(node.left, result);
            result.push(node.value);
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
}

// Usage example:

const avl = new AVLTree();

// Insert values
avl.insert(10);
avl.insert(20);
avl.insert(5);
avl.insert(6);
avl.insert(15);

// In-order traversal (sorted order)
console.log("

