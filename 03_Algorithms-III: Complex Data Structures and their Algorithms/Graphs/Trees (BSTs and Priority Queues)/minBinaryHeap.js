class minBinaryHeap{

    constructor(){
        this.values = [];
    }
    
    insert(val){

        this.values.push(val);
        if(this.values.length > 1) this.bubbleUp(val);

        return this.values;
    }

    // Once any value is inserted, bubble that value up the heap as needed to ensure parent is still larger than any child nodes
    bubbleUp(){

        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1) / 2);

        // Keep checking if current node val is larger than its parent
        while( this.values[index] < this.values[parentIndex] ){

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



    // Remove root and return it - also, update tree
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
        
        // Swap last value and move to begining
        const end = this.values.pop();

        // Only push last element to the start if array isn't empty
        if(this.values.length > 0) this.values.splice(currentIdx,1, end );

        while( true ){
            

            if(this.values.length == 0) break;
            
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

const heap = new minBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log( heap.insert(55) );

//console.log("EXTRACING...", heap.extractMin2(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
console.log( heap.extractMin(), heap.values);
