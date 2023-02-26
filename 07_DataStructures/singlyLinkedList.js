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
            console.log("popping only node")
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
    traverse() { 
        let current = this.head;
        while (current) { 
            current = current.next;
        }
    }
}

class Node{
    constructor(val) { 
        this.val = val;
        this.next = null;
    }
}

const list = new SinglyLinkedList();
// list.push("first");
// list.push("second");
// list.push("third");

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

// list.traverse();

// SinglyLinkedList {
//     head: Node { val: 'first', next: Node { val: 'second', next: [Node] } },
//     tail: Node { val: 'third', next: null },
//     length: 3