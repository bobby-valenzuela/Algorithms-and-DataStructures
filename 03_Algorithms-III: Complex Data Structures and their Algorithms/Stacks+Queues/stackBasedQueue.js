class StackBasedQueue {
    constructor() {
        this.mainStack = [];
        this.removalStack = [];
    }

    enqueue(value) {
        
        this.mainStack.push(value);

        return this;
    }

    dequeue() {

        // If removalStack is empty, move all elements from mainStack
        if (this.removalStack.length === 0) {

            // Move items from mainStack to removalStack (this inverses the order allowing us to pop off the 'First-In' item from the end of the removalStack)
            while(this.mainStack.length > 0){
                this.removalStack.push(this.mainStack.pop());
            }
        }

        // Remove and return First-In item
        return this.removalStack.pop();

    }

    // Peek at whats to be popped off next
    peek() {
        // Check the front of the queue (removalStack first)
        if (this.removalStack.length > 0) {
            return this.removalStack[this.removalStack.length - 1];
        }
        return this.mainStack[0];
    }
}

const myQueue = new StackBasedQueue();
console.log(myQueue.peek());
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
console.log(myQueue.peek());
console.log("========");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log("========");
console.log(myQueue.peek());

console.log(myQueue);

// Techinically this is just an array-based queue using shift and push except it uses twice the space complexity...

