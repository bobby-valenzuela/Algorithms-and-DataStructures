class BinarySearchTree { 
    constructor() { 
        this.root = null;
    }

    insert(value) { 
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        else { 

            let current = this.root;

            if (value === current.value) return undefined;

            while (true) { 

                if (value < current.value) { 
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    else { 
                        current = current.left;
                    }
                }
                
                if (value > current.value) { 
                    
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    else { 
                        current = current.right;
                    }

                }
                

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

// const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.left = new Node(7);
// tree.right = new Node(15);
// tree.left.right = new Node(9);


