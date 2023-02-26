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
list.push("first");
list.push("second");
list.push("third");

// list.traverse();

// SinglyLinkedList {
//     head: Node { val: 'first', next: Node { val: 'second', next: [Node] } },
//     tail: Node { val: 'third', next: null },
//     length: 3