class BinarySearchTree { 
    constructor() { 
        this.root = null;
    }

    insert(value) { 

        if (isNaN(value) ) return null;
        
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        else { 

            let current = this.root;

            value = parseFloat(value);

            // Don't insert dups
            if (value === current.value) return undefined;

            while (true) { 

                if (value < current.value) { 
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }

                    current = current.left;
                }
                
                if (value > current.value) { 
                    
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }

                    current = current.right;

                }
                

            }

        }

    }

    find(value) { 

        let foundValue = false;
        let current = this.root; // Starting searching at root

        while (!foundValue) { 
            // If no such node exists - then we failed to find value
            if (!current) return undefined;

            if (current.value === value) return foundValue = true && current;
            
            if (value < current.value) {
                current = current.left;
            }
            else if(value > current.value) { 
                current = current.right;
            }

        }

    }

}

class Node { 
    constructor(value) { 
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinarySearchTree();
tree.insert(20);
tree.insert(30);
tree.insert(10);
tree.insert(7);
tree.insert(13);


// tree.root = new Node(10);
// tree.left = new Node(7);
// tree.right = new Node(15);
// tree.left.right = new Node(9);


