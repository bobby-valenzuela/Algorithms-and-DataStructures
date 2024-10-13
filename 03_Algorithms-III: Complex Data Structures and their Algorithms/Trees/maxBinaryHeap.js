class maxBinaryHeap{

    constructor(){
        this.values = [];
    }
    
    insert(val){

        this.values.push(val);
        this.bubbleUp(val);

        return this.values;
    }

    // Once any value is inserted, bubble that value up the heap as needed to ensure parent is still larger than any child nodes
    bubbleUp(){

        let index = this.values.length - 1;
        let parentIndex = Math.floor( (index - 1) / 2);

        // Keep checking if current node val is larger than its parent
        while( this.values[index] > this.values[parentIndex] ){

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
    extractMax(){

        const maxToExtract = this.values[0];
        this.bubbleDown();
        return maxToExtract;

    }

    bubbleDown(){

        const idxIsInBounds = i => i >= 0 && i < this.values.length;
        const valueIsGreater = (idx, idx2) => idxIsInBounds(idx) && this.values[idx] > this.values[idx2];
        const getChildIndex = lr => lr === 'l' ? (currentIdx * 2 ) + 1 : (currentIdx * 2 ) + 2;

        // Swap last value and move to begining
        const end = this.values.pop();
        this.values.splice(0,1, end );

        let currentIdx = 0, leftChildIdx = getChildIndex('l'), rightChildIdx = getChildIndex('r');

        // Indexes are in bounds and value there is greater than current
        let leftChildIsGreater =  valueIsGreater(leftChildIdx, currentIdx);
        let rightChildIsGreater = valueIsGreater(rightChildIdx, currentIdx);

        // Compare current root with children
        while( rightChildIsGreater || leftChildIsGreater){
            
            if( currentIdx < 0 ) break;

            // console.log(`currentIdx: ${currentIdx} | val: ${this.values[currentIdx]} | leftChildIdx: ${leftChildIdx} (val: ${this.values[leftChildIdx]}) | rightChildIdx: ${rightChildIdx} (val: ${this.values[rightChildIdx]})`)

            // The root is not the larger than its children - save it so we can swap with a child
            const currentParent = this.values[currentIdx];

            // Find greater child to swap with
            const childIdxToSwap = this.values[rightChildIdx] > this.values[leftChildIdx] ? rightChildIdx : leftChildIdx;

            // Move child val into current idx (parent)
            this.values[currentIdx] = this.values[childIdxToSwap];
            
            // Move parent val in child
            this.values[childIdxToSwap] = currentParent;


            // Update indexes
            currentIdx = childIdxToSwap, leftChildIdx = getChildIndex('l'), rightChildIdx = (currentIdx * 2 ) + 2;
            
            leftChildIsGreater =  valueIsGreater(leftChildIdx, currentIdx);
            rightChildIsGreater = valueIsGreater(rightChildIdx, currentIdx);
        

        }

    }

    // Variant used in Colt Steel course
    extractMax2(){

        const max = this.values[0];
        const end = this.values.pop();
        
        if( this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;

    }
    sinkDown(){

        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){

            let leftChildIdx = 2 * idx + 1; 
            let rightChildIdx = 2 * idx + 2; 
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];

                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];

                if(
                    ( swap == null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx
                }

            }

            if(swap == null) break;
            this.values[idx] = this.values[swap];
            idx = swap;

        }

    }


}

const heap = new maxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);

console.log( heap.insert(55) );

console.log("EXTRACING...", heap.extractMax(), heap.values);
console.log("EXTRACING...", heap.extractMax2(), heap.values);
