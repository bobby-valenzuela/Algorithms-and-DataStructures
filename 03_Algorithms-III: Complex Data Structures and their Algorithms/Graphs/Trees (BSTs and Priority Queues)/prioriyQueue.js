// Also called an indexed priority tree
// A data structure where each element has a priority and elements with higher priority are served before elements with a lower priority.
// MinBinary Heap-based: 
        // Meaning the highest priority item (item dequeued) will have the lowest value in priority (for example: priority of 1)
        // And the next item enqueued will be pushed to the end of the list and will "Bubble Up" to find its proper place
class PriorityQueue{

    constructor(){
        this.values = [];
    }
    
    enqueue(data){

        const newNode = new Node( data );

        this.values.push(newNode);

        if(this.values.length > 1) this.bubbleUp();

        return this.values;
    }

    // Once any value is enqueued, bubble that value up the heap as needed to ensure parent is still smaller than any child nodes
    bubbleUp(){

        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1) / 2);

        // Keep checking if current node val is greater than its parent

        while( parentIndex >= 0 && this.values[index].priority < this.values[parentIndex].priority ){
            // console.log(`Inserted => index: ${index} | ${parentIndex}`)
            const current = this.values[index];

            // Swap (step 1) Put parent value in current one
            this.values[index] = this.values[parentIndex];

            // Swap (step 2) Put current val in parent spot
            this.values[parentIndex] = current;

            // Update new current indexes
            index = parentIndex;                            // Next index to check should be new parent we just added
            parentIndex = Math.floor( (index - 1) / 2);     // Next parent to check should be parent of new parent to check
        }
    
    }



    // dequeue root and return it - also, update tree
    dequeue(){

        const nextToDo = this.values[0];
        // Remove top most item and add new root (top most priority item)
        if(this.values.length > 1) this.bubbleDown();
        return nextToDo;

    }
    // Start from top (largest index) and make sure children are smaller
    bubbleDown(){

        const idxIsInBounds = i => i >= 0 && i < this.values.length;
        const valueIsLess = (idx, idx2) => idxIsInBounds(idx) && this.values[idx].priority < this.values[idx2].priority;

        let currentIdx = 0;

        // Move last element to begining to start bubbling down
        const end = this.values.pop();
        
        // Only push last element to the start if array isn't empty
        if(this.values.length > 0) this.values.splice(currentIdx,1, end );
        
        while( true ){
            
            if(this.values.length == 0) break;
            
            let leftChildIdx = (currentIdx * 2) + 1, 
                rightChildIdx = (currentIdx * 2) + 2;
            let leftChildIsLess =  valueIsLess(leftChildIdx, currentIdx),
                rightChildIsLess = valueIsLess(rightChildIdx, currentIdx);
            const lowerPriorityChildrenExist = (rightChildIsLess || leftChildIsLess);
            
            if( currentIdx > this.values.length || ! lowerPriorityChildrenExist ) break;

            // At this point we know at least one of the child nodes is greater than the current node - need to reorder.


            // The root is not the larger than its children - save it so we can swap with a child
            const currentParent = this.values[currentIdx];

            // Find greater child to swap with
            const childIdxToSwap = this.values[rightChildIdx].priority < this.values[leftChildIdx].priority ? rightChildIdx : leftChildIdx;
            
            // Move child val into current idx (parent)
            this.values[currentIdx] = this.values[childIdxToSwap];
            
            // Move parent val in child
            this.values[childIdxToSwap] = currentParent;

            // Update index
            currentIdx = childIdxToSwap; 

        }

    }



}

class Node{
    constructor(data){
        this.value = data.value;
        this.priority = data.priority;
    }
}

const queue = new PriorityQueue();

// Lower Priority value =  high prority
queue.enqueue( { value: "Urgent Task", priority: 1 } );
queue.enqueue( { value: "Semi-Urgent Task", priority: 5 } );
queue.enqueue( { value: "Low-Pri Task", priority: 8 } );
queue.enqueue( { value: "Non-Urgent Task", priority: 9 } );
console.log(queue.enqueue( { value: "Urgent Task", priority: 10 } ));
console.log(queue.enqueue( { value: "Some Task", priority: 2 } ));

queue.enqueue( { value: "Urgent Task B", priority: 2 } );
console.log( queue.values );
console.log( "REMOVED!",queue.dequeue() );
console.log( queue.values );
console.log( "REMOVED!", queue.dequeue() );
console.log( queue.values );
queue.enqueue( { value: "Urgent Task A+", priority: 1 } );
console.log( queue.values );
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
// console.log( queue.extractMin(), queue.values);
