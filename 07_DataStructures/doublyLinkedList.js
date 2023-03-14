class Node{
    constructor(val) { 
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList { 
    constructor() { 
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { 
        // Create new node (new tail)
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode;
        }
        else { 
            // Make old tail point to newly created node
            this.tail.next = newNode;
            // Make new tail prev point to old tail
            newNode.prev = this.tail;
            // Make new tail the newNode itself
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {

        if (!this.head) return undefined;
        
        const popped = this.tail;

        // If there's only one node left... reset
        if (this.length === 1) {
            this.head = this.tail = null;
            this.length = 0;
        }
        else {
            // Update tail to be 2ns to last node
            this.tail = popped.prev;
            // Make sure it no longer points to the old tail
            this.tail.next = null;
            this.length--;
        }
        // Before returning old tail - server any connections to other nodes.
        popped.prev = null;
        return popped;
    }
    shift() { // Remove/return first node 
        if (!this.head) return undefined;
        const oldHead = this.head;
        
        // If there's only one node left... reset
        if (this.length === 1) {
            this.head = this.tail = null;
        }
        else {
            // Update new head
            this.head = oldHead.next;
            
            // reset this.head's it's prev pointer
            this.head.prev = null;      
            
        }
        
        this.length--;

        // Before returning old head - server any connections to other nodes.
        oldHead.next = null;
        return oldHead
    }
    unshift(val) { // Add new node to beginning (get new head - point it to old head) 

        const newNode = new Node(val);
        // If list is already empty
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // Old head 'prev' (2nd item now) to point to new head
            this.head.prev = newNode;
            // new head 'next' to point to old head
            newNode.next = this.head;
            // Set new head
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) { 
        index = parseInt(index);
        if (index < 0 || index >= this.length) return null;
        
        // See if we should at begin/end depending on the index given
        if (index <= Math.floor(this.length / 2)) {
            // console.log("WORKING FROM START");
            let counter = 0;
            let current = this.head;
    
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;

        }
        else { 
            
            // console.log("WORKING FROM END");
            let counter = this.length - 1;
            let current = this.tail;
    
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;

        }

    }
    set(index, val) { 
        const foundNode = this.get(index);
        if (foundNode != null) { 
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {

        // if the index is out of bounds - don't proceed
        if (index < 0 || index > this.length) return false;
        // If we're just appending - use push method
        if (index === this.length) return !!this.push(val);
        // if prepending, use unshift
        if (index === 0) return !!this.unshift(val);
        
        // if inserting in between two existing values...

        // Create new node
        const newNode = new Node(val);

        // Get adjacent nodes
        const beforeNode = this.get(index - 1);
        const afterNode = this.get(index);

        // Point beforeNode 'next' to new node
        beforeNode.next = newNode;
        
        // Point afterNode 'prev' to new node
        afterNode.prev = newNode;


        ///// Now handle new node stuff...

        // point new node 'prev' back to beforeNode
        newNode.prev = beforeNode;
        // point new node 'next' to next node
        newNode.next = afterNode;
        

        this.length++;
        return true;
        
    }
    // // Remove by index
    // remove(index) { 
    //     if (index < 0 || index >= this.length) return undefined;
        
    //     // Removing first node
    //     if (index === 0) return this.shift();
        
    //     // Removing last node
    //     console.log(this.length)
    //     if (index === (this.length - 1)) console.log("Continuing...");
    //     if (index === this.length - 1) return this.pop();

    //     const foundNode = this.get(index);
    //     const prevNode = this.get(index - 1);
    //     const nextNode = this.get(index + 1);
         
    //     prevNode.next = foundNode.next;
    //     this.length--;
    //     return this.foundNode;

    // }
    // reverse() {
    //     // Swap head and tail
    //     [this.tail, this.head] = [this.head, this.tail];
        
    //     let current = this.tail;
    //     let prev = null;

    //     while (current) { 
            
    //         // Save the next
    //         const next = current.next;

    //         // Update next to point at the previous one
    //         current.next = prev;
    //         prev = current;
    //         current = next;

    //     }


    // }
    // traverse() { 
    //     let current = this.head;
    //     while (current) { 
    //         current = current.next;
    //     }
    // }
    // print() { 
    //     const arr = [];
    //     let current = this.head;

    //     while (current) { 
    //         arr.push(current.valxx``);
    //         current = current.next;
    //     }
    //     console.log(arr);
    // }
}



const list = new DoublyLinkedList();
list.push("first");
list.push("second");
list.push("third");
// console.log(list);
list.insert(1,'newsecond')
console.log(list);
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
// list.push("fourth");
// list.push("fifth");
// list.push("sixth");
// console.log(list);

// console.log(`GETTING: 1 | ${list.get(1)}`);
// console.log(`GETTING: 5 | ${list.get(5)}`);
// console.log(`GETTING: 6 | ${list.get(6)}`);
// console.log(`GETTING: 2 | ${list.get(2)}`);

// list.unshift("zero!");
// console.log(list);
// list.shift()
// console.log(list);
// console.log("SHIFTED",list);
// list.shift()
// console.log("SHIFTED",list);
// list.shift()
// console.log("SHIFTED",list);
// list.pop()
// console.log("POPPED",list);
// list.pop()
// console.log("POPPED",list);
// list.pop()
// console.log("POPPED",list);
// list.reverse();
// list.print()

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