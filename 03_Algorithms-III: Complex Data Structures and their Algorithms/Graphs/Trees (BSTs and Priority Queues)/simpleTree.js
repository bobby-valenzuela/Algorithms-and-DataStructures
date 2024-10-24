class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    // Add a child node to this node
    addChild(childValue) {
        const childNode = new TreeNode(childValue);
        this.children.push(childNode);
        return childNode;
    }

    // Remove a child node based on value
    removeChild(childValue) {
        this.children = this.children.filter(child => child.value !== childValue);
    }

    // Check if node contains a specific value
    contains(value) {
        if (this.value === value) return true;

        for (let child of this.children) {
            if (child.contains(value)) return true;
        }
        return false;
    }

    // Traverse the tree using Depth-First Search (DFS)
    traverseDFS(callback) {
        callback(this); // Perform an action on the current node

        for (let child of this.children) {
            child.traverseDFS(callback); // Traverse each child node recursively
        }
    }

    // Traverse the tree using Breadth-First Search (BFS)
    traverseBFS(callback) {
        let queue = [this];

        while (queue.length) {
            let currentNode = queue.shift();
            callback(currentNode); // Perform an action on the current node

            // Add all children of the current node to the queue
            queue.push(...currentNode.children);
        }
    }
}

// Example usage:
const root = new TreeNode('Root');
const child1 = root.addChild('Child 1');
const child2 = root.addChild('Child 2');

child1.addChild('Grandchild 1.1');
child1.addChild('Grandchild 1.2');
child2.addChild('Grandchild 2.1');

// Traverse the tree using DFS
console.log('DFS Traversal:');
root.traverseDFS(node => console.log(node.value));

// Traverse the tree using BFS
console.log('BFS Traversal:');
root.traverseBFS(node => console.log(node.value));

// Check if tree contains a value
console.log('Contains "Grandchild 2.1"?', root.contains('Grandchild 2.1')); // true

// Remove a child node
root.removeChild('Child 2');
console.log('After removal of Child 2, DFS Traversal:');
root.traverseDFS(node => console.log(node.value)); // Child 2 and its children are removed
