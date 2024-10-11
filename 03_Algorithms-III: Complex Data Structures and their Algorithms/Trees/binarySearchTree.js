// A Binary tree is a type of tree where each node can have a left and right node.
// A Binary search tree is a type of binary tree that is ordered - thus searchable by comparing values of various nodes
class BinarySearchTree { 
    constructor() { 
        // The tree starts empty, so the root is set to null.
        this.root = null;
    }

    // Method to insert a new value into the tree.
    insert(value) { 

        // If the value is not a number, exit the function.
        if (isNaN(value)) return null;
        
        // Create a new node for the value.
        const newNode = new Node(value);

        // If the tree is empty (no root), set this new node as the root.
        if (!this.root) {
            this.root = newNode;
            return this;
        } else { 

            // Start comparing from the root.
            let current = this.root;

            // Make sure value is a number (in case it was a string that could be a number).
            value = parseFloat(value);

            // If the value is the same as the current node, do not insert duplicates.
            if (value === current.value) return undefined;

            // Keep looping to find the correct spot for the new value.
            while (true) { 

                // If the value is less than the current node's value, go left.
                if (value < current.value) { 
                    // If the left child is empty, insert the new node here.
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }

                    // Otherwise, move left to the next node so the next loop iteration will try the next node to the left.
                    current = current.left;
                }

                // If the value is greater than the current node's value, go right.
                if (value > current.value) { 
                    // If the right child is empty, insert the new node here.
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }

                    // Otherwise, move right to the next node so the next loop iteration will try the next node to the right.
                    current = current.right;
                }
            }
        }
    }

    // Method to search for a value in the tree.
    find(value) { 
        // Start at the root of the tree.
        let foundValue = false, current = this.root;

        // Loop until the value is found or the search fails.
        while (!foundValue) { 
            // If we reach a null node, the value doesn't exist in the tree.
            if (!current) return undefined;

            // If the current node holds the value we're looking for, return it.
            if (current.value === value) return foundValue = true && current;

            // If the value is less than the current node's value, go left.
            if (value < current.value) {
                current = current.left;
            } 
            // If the value is greater than the current node's value, go right.
            else if (value > current.value) { 
                current = current.right;
            }
        }
    }

    // Method to check if a value exists in the tree.
    contains(value) { 
        // The 'find' method checks if the value is present. If it is, return true.
        return !!this.find(value);
    }

    // Method to find the parent of a node and whether the node is a left or right child.
    findParent(value) { 

        let foundValue = false;
        let current = this.root; // Start at the root of the tree.
        let previous = null;    // Keep track of the previous node (the parent).
        let placement = null;   // Is the node a left or right child of its parent?

        // Loop until we find the node or determine it doesn't exist.
        while (!foundValue) { 
            // If we reach a null node, the value doesn't exist in the tree.
            if (!current) return undefined;

            // If the current node holds the value we're looking for, stop searching.
            if (current.value === value) {
                foundValue = true;
                break;
            }

            // If the value is less than the current node's value, go left.
            if (value < current.value) {
                previous = current;
                current = current.left;
                placement = 'left';
            }
            // If the value is greater than the current node's value, go right.
            else if (value > current.value) { 
                previous = current;
                current = current.right;
                placement = 'right';
            }
        }

        // Return the parent node and whether the value is a left or right child.
        return [previous, placement];
    }

    // Method to remove a node from the tree.
    remove(value) { 
        // Find the node we want to remove.
        const foundNode = this.find(value);
        if (!foundNode) return undefined;

        // Find the parent of the node we want to remove and which side it's on.
        const [parent, side] = this.findParent(value);

        // Set the parent's left or right pointer to null, effectively "cutting off" the node.
        parent[side] = null;

        // Return the removed node.
        return foundNode;
    }

    // Breadth First Search (BFS)
    BFS(){

        const queue = [], data = [];
        let node = this.root;

        // Set the first node we know of (root) as the first thing to check in the queue
        queue.push(node);

        // As long as there are items in the queue iterate and add to data var and check for left/right to also add to the queue to be checked next
        while(queue.length){

            // Remove this from queue
            node = queue.shift();
            
            // Add to data (just pushing value - but could just push nodes as well)
            data.push(node.value);

            // Check left/right
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }
        
        return data;

    }
}

// This class represents a node in the tree.
class Node { 
    constructor(value) { 
        this.value = value;  // The value the node holds.
        this.left = null;    // Left child starts as null.
        this.right = null;   // Right child starts as null.
    }
}

// Create a new binary search tree.
const tree = new BinarySearchTree();
tree.insert(20);   // Insert values into the tree.
tree.insert(30);
tree.insert(10);
tree.insert(7);
tree.insert(13);

console.log(tree)
console.log(tree.BFS())
























// tree.root = new Node(10);
// tree.left = new Node(7);
// tree.right = new Node(15);
// tree.left.right = new Node(9);


