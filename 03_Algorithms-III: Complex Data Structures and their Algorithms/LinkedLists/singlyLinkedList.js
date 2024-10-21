class Node{
    constructor(val) { 
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList { 
    constructor() { 
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // (append) Add node to end
    push(val) { 
        // Create new node (new tail)
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode
            this.tail = this.head;
        }
        else { 
            // Make old tail point to newly created node
            this.tail.next = newNode;
            // Make new tail the newNode itself
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // Remove last node
    pop() { 

        if (!this.head) return undefined;
        
        // If there's only one node left... reset
        if (this.head === this.tail) {
            const toPop = this.head;
            this.head = this.tail = null;
            this.length = 0;
            return toPop;
         }

        let current = this.head;

        while (current) { 
            // 1. Get second to last item - set as tail
            // 2. Remove and return the current tail


            let next = current.next;

            // If the next is the last then we're on the 2nd to last node
            if (next === this.tail) {
                // point 'next' of new tail to null
                current.next = null;
                // Set new tail
                this.tail = current;
                // Update list length
                this.length--;
                // Return 2nd to last
                return next;
            }
            current = next;
        }
        
    }
    shift() { // Remove/return first node 
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;

        if (!this.head) {
            this.tail = null ;
        }
        return oldHead
    }
    // (prepend) Add new node to beginning (get new head - point it to old head) 
    unshift(val) { 
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else { 
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) { 
        index = parseInt(index);
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;

    }
    set(index, val) { 
        const foundNode = this.get(index);
        if (foundNode) { 
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) { 
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        
        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        const nextNode = this.get(index);
        
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
        
    }
    // Remove by index
    remove(index) { 
        if (index < 0 || index >= this.length) return undefined;
        
        // Removing first node
        if (index === 0) return this.shift();
        
        // Removing last node
        console.log(this.length)
        if (index === (this.length - 1)) console.log("Continuing...");
        if (index === this.length - 1) return this.pop();

        const foundNode = this.get(index);
        const prevNode = this.get(index - 1);
        const nextNode = this.get(index + 1);
        
        // To avoid a disconnect - connect the parent to the new next node
        prevNode.next = nextNode;
        this.length--;

        // before returning the removed node - clear any prev properties
        delete foundNode.prev;
        return foundNode;

    }
    reverse() {
        // Swap head and tail
        [this.tail, this.head] = [this.head, this.tail];
        
        let current = this.tail;
        let prev = null;

        // Start from the tail and work our way back to head updating all the next values as we go 
        while (current) { 
            
            // Save the next
            const next = current.next;

            // Update next to point at the previous one
            current.next = prev;
            // Update prev so on next iteration we can point .next to it 
            prev = current;
            current = next;

        }

        // Visualization: 
            // We're swapping the head+tail only nominally
            // Then, we're traversing the list from start to finish in standard order and on each node we're setting the .next to be equal to the preious node we came from 
        // [ 1 => 2 | 2 => 3 | 3 => 4 | 4 => 5 | 5 => 6 | 6 => N ]      <-- initial state
        // [(1)=> N | 2 => 3 | 3 => 4 | 4 => 5 | 5 => 6 | 6 => N ]      <-- on first node set .next to previous node visited (null)
        // [ 1 => N |(2)=> 1 | 3 => 4 | 4 => 5 | 5 => 6 | 6 => N ]      <-- on second node set .next to previous node visited (1)
        // [ 1 => N | 2 => 1 |(3)=> 2 | 4 => 5 | 5 => 6 | 6 => N ]      <-- on third node set .next to previous node visted (2)
        // [ 1 => N | 2 => 1 | 3 => 2 |(4)=> 3 | 5 => 6 | 6 => N ]      <-- ...
        // [ 1 => N | 2 => 1 | 3 => 2 | 4 => 3 |(5)=> 4 | 6 => N ]
        // [ 1 => N | 2 => 1 | 3 => 2 | 4 => 3 | 5 => 4 |(6)=> 5 ]
        

    }
    traverse() { 
        let current = this.head;
        while (current) { 
            current = current.next;
        }
    }
    print() { 
        const arr = [];
        let current = this.head;

        while (current) { 
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}



const list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
console.log(list)
list.reverse();
list.print()

// list.remove(0);
// list.remove(1);
// console.log(list);

// console.log(list);
// console.log("about to pop\n")
// console.log(list.pop());
// console.log(list);
// console.log("about to pop\n")
// console.log(list.pop());
// console.log(list);
// console.log("about to pop\n")
// console.log(list.pop());
// console.log(list);
// console.log("\n\nabout to pop!!!\n")
// console.log(list.pop());
// console.log(list);
// list.push("first");
// console.log(list);
// list.push("second");
// console.log(list);
// list.unshift("newfirst");
// console.log(list);

// list.traverse();

// SinglyLinkedList {
//     head: Node { val: 'first', next: Node { val: 'second', next: [Node] } },
//     tail: Node { val: 'third', next: null },
//     length: 3
