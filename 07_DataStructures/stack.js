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
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) { 
        const newNode = new Node(val);

        // If this is first node we're adding...
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else { 
            const newSecondNode = this.first;
            newNode.next = newSecondNode;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() { 
        if (this.size === 0) return null;

        const removedNode = this.first;
        
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode.val;
    }
}
class Node{ 
    constructor(val) { 
        this.val = val;
        this.next = null;
    }
}