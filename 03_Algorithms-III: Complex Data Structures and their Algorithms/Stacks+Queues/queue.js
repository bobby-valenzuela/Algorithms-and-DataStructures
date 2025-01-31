// Queue: FIFO Data Structure
// Here we are adding to the tail and removing from the head here (this method is geared towards optimizing inserts instead of removals,though we could do inversley if we wanted better support for removals)

class Queue { 
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Add to tail (end)
    enqueue(val) { 
        const newNode = new Node(val);

        // If this is first node we're adding...
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else { 
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // Remove from head (beginning)
    dequeue() { 
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

/*
=== Note on Array-Based Queues ===

Though easy to implement, they aren't are ideal because they uses indexes which slow them down and use more space (both time and space complexity suffers)

Array-based queues can only be created on of two ways:

1. Using unshift (insert) and pop (to remove): Which is more intensive it comes to inserting, as the whole list needs to be re-indexed when inserting (since we're inserting at the start).
2. Using shift (to remove) and push (to insert): Which is more intensive it comes to removing, as the whole list needs to be re-indexed when removing (since we're removing from the start).

This is way it's ideal to create a specific queue class.

*/


class arrayBasedQueue {

    constructor(){
        this.data = [];
    }

    add(record){
        this.data.unshift(record)
    }

    remove(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length - 1]
    }


}

// weave
function weave(q1, q2){
    const q = new arrayBasedQueue();

    while(q1.peek() || q2.peek()){
        if(q1.peek()) q.add(q1.remove())
        if(q2.peek()) q.add(q2.remove())
    }

    return q;
}
