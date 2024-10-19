// A data structure where each element has a priority and elements with higher priority are served before elements with a lower priority.
// MinBinary Heap-based: 
        // Meaning the highest priority item (item dequeued) will have the lowest value in priority (for example: priority of 1 would be high-pri)
        // And the next item enqueued will be pushed to the end of the list and will "Bubble Up" to find its proper place via our sorting method

// Note: This isn't ideal - we should prefer a binary heap-based implementation of a queue to avoid sorting every time, but this is good for demoing some things.
class PriorityQueue {

    constructor(){
        this.values = [];
    }

    enqueue(val, priority){
        this.values.push( { val, priority } );
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    // Sort based on priority value (ascending)
    sort(){
        this.values.sort( (a,b) => a.priority - b.priority )
    }

}
