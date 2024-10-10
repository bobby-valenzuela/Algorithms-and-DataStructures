/* 
Stacks: LIFO Data Structure

This stack will be linked-list-based (as opposed to an array-based implementation).
A stack CAN be created using the pop/push method of an array or the shift/unshit methods.
Pop/push is preferred as using the shift/unshift methods requires to re-calulate all the indexes.

Linked lists are preferred over arrays to make a staack as Linked lists don't carry the extra baggae of indexes that arrays do.

Note: One ways stacks benefit over linked lists is that insertion/deletion time is O(1) constant time - whereas a linked list is O(n) as the list needs to be traversed to find the item to remove/insert.
Note: Stacks also benefit over arrays as they use less space since there's no index.

*/
class Stack { 
    // The constructor is run when we make a new Stack. It sets up the Stack's first and last items as empty (null), 
    // and sets its size to zero because the Stack starts out empty.
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // The push method adds a new value to the Stack.
    // The "val" is the value we want to add.
    push(val) { 
        // We create a new Node to hold the value we are adding to the Stack.
        const newNode = new Node(val);

        // If the Stack is empty (size is 0), then this new node is both the first and last item in the Stack.
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } 
        // If there are already items in the Stack, we add the new node to the front.
        else { 
            const newSecondNode = this.first; // Save the current first node because it will be the second node.
            newNode.next = newSecondNode; // Link the new node to the current first node.
            this.first = newNode; // Update the first node to be the new one.
        }
        return ++this.size; // Increase the size by 1 and return the updated size.
    }

    // The pop method removes the first item (the top of the Stack) and returns its value.
    pop() { 
        // If the Stack is empty (size is 0), there’s nothing to remove, so we return null.
        if (this.size === 0) return null;

        const removedNode = this.first; // Store the node we’re removing (the first one).

        // If there’s only one item in the Stack, after removing it, the Stack becomes empty,
        // so we set the last item to null as well.
        if (this.size === 1) {
            this.last = null;
        }
        // Move the first pointer to the next item in the Stack, which makes the second node the new first node.
        this.first = this.first.next;

        this.size--; // Decrease the size of the Stack by 1.
        return removedNode.val; // Return the value of the node that was removed.
    }
}

// A Node is just a single piece of the Stack that holds a value and points to the next Node in line.
// The constructor sets up a Node to hold the given value (val), and sets its "next" pointer to null initially,
// meaning this Node doesn't point to anything when it's created.
class Node{ 
    constructor(val) { 
        this.val = val;
        this.next = null;
    }
}

