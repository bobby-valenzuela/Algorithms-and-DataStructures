class priorityQueue{

    constructor(){
        this.values = [];
    }
    
    enqueue(data){

        const newNode = new Node( data );

        this.values.push(newNode);

        if(this.values.length > 1) this.bubbleUp();

        return this.values;
    }

    // Once any value is enqueueed, bubble that value up the heap as needed to ensure parent is still smaller than any child nodes
    bubbleUp(){

        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1) / 2);

        console.log(this.values)

        // Keep checking if current node val is greater than its parent
        console.log(`[+] Inserted: idx (${index}) val (${this.values[index].priority}) | Parent: idx (${parentIndex}) val (${this.values[parentIndex].priority} )`)

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
            console.log(`Next Indexes: ${index} | ${parentIndex}`)
        }
    
    }



    // dequeue root and return it - also, update tree
    extractMin(){

        const minToExtract = this.values[0];
        this.bubbleDown();
        return minToExtract;

    }
    // Start from top (largest index) and make sure children are smaller
    bubbleDown(){

        const idxIsInBounds = i => i >= 0 && i < this.values.length;
        const valueIsLess = (idx, idx2) => idxIsInBounds(idx) && this.values[idx] < this.values[idx2];

        let currentIdx = 0;

        while( true ){
            
            // Swap last value and move to begining
            const end = this.values.pop();

            // Only push last element to the start if array isn't empty
            if(this.values.length == 0) break;
            this.values.splice(currentIdx,1, end );

            let leftChildIdx = (currentIdx * 2) + 1, 
                rightChildIdx = (currentIdx * 2) + 2;
            let leftChildIsLess =  valueIsLess(leftChildIdx, currentIdx),
                rightChildIsLess = valueIsLess(rightChildIdx, currentIdx);
            
            if( currentIdx > this.values.length || ! (rightChildIsLess || leftChildIsLess) )   break;

            // The root is not the larger than its children - save it so we can swap with a child
            const currentParent = this.values[currentIdx];

            // Find greater child to swap with
            const childIdxToSwap = this.values[rightChildIdx] < this.values[leftChildIdx] ? rightChildIdx : leftChildIdx;

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

const queue = new priorityQueue();

// Lower Priority value =  high prority
queue.enqueue( { value: "Urgent Task", priority: 1 } );
queue.enqueue( { value: "Semi-Urgent Task", priority: 5 } );
queue.enqueue( { value: "Low-Pri Task", priority: 8 } );
queue.enqueue( { value: "Non-Urgent Task", priority: 9 } );
console.log(queue.enqueue( { value: "Urgent Task", priority: 10 } ));
console.log(queue.enqueue( { value: "Some Task", priority: 2 } ));

queue.enqueue( { value: "Urgent Task B", priority: 2 } );
console.log( queue.values);
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
