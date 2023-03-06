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
    unshift(val) { // Add new node to beginning (get new head - point it to old head) 
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
        const nextNode = this.get(index + 1);
        
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
         
        prevNode.next = foundNode.next;
        this.length--;
        return this.foundNode;

    }
    traverse() { 
        let current = this.head;
        while (current) { 
            current = current.next;
        }
    }
}



const list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
list.remove(0);
list.remove(1);
console.log(list);

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