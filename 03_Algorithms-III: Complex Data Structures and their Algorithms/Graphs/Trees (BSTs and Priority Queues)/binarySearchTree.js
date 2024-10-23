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
                // This is what makes this Binary Tree and Binart SEARCH tree - we're trying to keep values ordered.

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

    // Method to find the parent of a node and whether the child node is a left or right child.
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

    // Method to remove a node from the tree and remove any subtrees under this node
    removeCascade(value) { 
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

    // Remove a single node and
    remove(value){

        if(!this.root) return false;

        // Find the node we want to remove.
        const nodeToDelete = this.find(value);
        if (!nodeToDelete) return undefined;

        const [parentNode, nodeToDeleteSide] = this.findParent(value);
        
        if( ! nodeToDelete.right && !nodeToDelete.left){
            // If no child then just remove this node
            parentNode[nodeToDeleteSide] = null;
        }

        // Option 1: Has no right child
        if( ! nodeToDelete.right ){
            // Swap this node we're removing with left child (if exists)

            // If we've removing the root - handle
            if(!parentNode){
                this.root = nodeToDelete.left;
            }
            else if(nodeToDelete.left){
                parentNode[nodeToDeleteSide] = nodeToDelete.left;
            }
        }
        // Option 2: Has Right child which doesn't have a left child
        else if( ! nodeToDelete.right.left ){

            if (!parentNode) {  // Removing the root
                this.root = nodeToDelete.right;
                this.root.left = nodeToDelete.left;  // Attach left subtree
            } else {
                // Right node replaces deleted node
                parentNode[nodeToDeleteSide] = nodeToDelete.right;
                // Attach left subtree
                if(nodeToDelete.left) parentNode[nodeToDeleteSide].left = nodeToDelete.left;  
            }


        }
        // Option 3: Has Right child which does have a left child (and possibly a right)
        else{

            // Find the smallest node in the right subtree (the in-order successor)
            let smallest = nodeToDelete.right;
            let smallestParent = nodeToDelete;

            while (smallest.left) {
                smallestParent = smallest;
                smallest = smallest.left;
            }

            // Swap nodeToDelete with the smallest node
            if (smallestParent !== nodeToDelete) {
                smallestParent.left = smallest.right;  // Reconnect smallestParent to smallest's right child
                smallest.right = nodeToDelete.right;  // Connect smallest to nodeToDelete's right subtree
            }

            smallest.left = nodeToDelete.left;  // Connect smallest to nodeToDelete's left subtree

            // Handle replacing the nodeToDelete
            if (!parentNode) {  // Removing the root
                this.root = smallest;
            } else {
                parentNode[nodeToDeleteSide] = smallest;  // Replace nodeToDelete with smallest
            }


        }


    }

    // Breadth First Search (BFS) | Collects all nodes in an array and returns them
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

    // Depth-First Search - PreOrder Style
    DFSPreOrder(){

        const data = [];

        function traverse(node){

            data.push(node.value);
            
            // Call recusively - don't need a base cas since we're only calling traverse() 
            // if we find a node on either side and we will eventually reach the last node.
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

        }

        traverse(this.root);

        return data;

    }

    // Depth-First Search - PostOrder Style (traverse all node before saving them into array to return)
    // Ideal if you want to traverse nodes in the same order they appear in the tree (great for reconstruction the tree again later - first item is root)
    DFSPostOrder(){

        const data = [];

        function traverse(node){

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);

            data.push(node.value);

        }

        traverse(this.root);

        return data;

    }

    // Depth-First Search - InOrder Style (traverses all nodes in order)
    // Ideal if you need to travserse node in order by value
    DFSInOrder(){

        const data = [];

        function traverse(node){

            if(node.left) traverse(node.left);
            
            data.push(node.value);
            
            if(node.right) traverse(node.right);

        }

        traverse(this.root);

        return data;

    }

    // Array returning the numbers of nodes on each level
    // EXAMPLE: [1, 2, 3]
    //         o
    //       /   \
    //      o     o
    //     / \   /
    //    o   o o 
    levelWidth(){

        const arr = [this.root, 's'];
        const counters = [0];

        // So long as we have something more than the delimeter
        while(arr.length > 1){

            const node = arr.shift();

            if(node === 's'){
                counters.push(0);
                arr.push('s');
            }
            else{
                if(node.left) arr.push(node.left);
                if(node.right) arr.push(node.right);
                counters[counters.length-1]++;
            }

        }

        return counters;

    }

    printTree(){
        const treeLevels = this.levelWidth();
        const treeWidth = treeLevels[treeLevels.length-1];
        
        // Width of each row - should be odd number to keep root at center
        let rowWidth = treeWidth % 2 === 0 ? treeWidth + 1 : treeWidth;
        rowWidth = rowWidth * 2;

        let level = '';

        for(let row = 0; row < treeLevels.length; row++){
            level+=`o`.repeat(treeLevels[row])
            console.log(level)
        }

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
tree.insert(10);   // Insert values into the tree.
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(14);

console.log("Tree: ", tree)
tree.printTree();
console.log("Tree (ROOT): ", tree.root)
console.log("Tree: (ROOT-L)", tree.root.left)
console.log("Tree: (ROOT-R)", tree.root.right)
console.log("BFS:", tree.BFS())
console.log("DFS (preorder)", tree.DFSPreOrder())
console.log("DFS (postorder)", tree.DFSPostOrder())
console.log("DFS (inorder)", tree.DFSInOrder())

// tree.remove(15)

console.log("Tree: ", tree)

// Note on BFS vs DFS:
// BFS is ideal for narrow trees (we're working sideways so a very wide tree could be slow to traverse)
// DFS is ideal for short trees  (we're working vertically so a very tall tree could be slow to traverse)



















// tree.root = new Node(10);
// tree.left = new Node(7);
// tree.right = new Node(15);
// tree.left.right = new Node(9);


