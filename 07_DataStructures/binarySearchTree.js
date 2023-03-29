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

            // If we found what we're looking for - break
            if (current.value === value) return foundValue = true && current;
            
            // Othwerwise, keep traversing tree until we find it or no node exists
            if (value < current.value) {
                current = current.left;
            }
            else if(value > current.value) { 
                current = current.right;
            }

        }

    }

    // Returns parent and child placement
    findParent(value) { 

        let foundValue = false;
        let current = this.root; // Starting searching at root
        let previous = null;    // Save prev node so that if we find current - we know the pre is the parent
        let placement = null;   // Is node right/left of parent?

        while (!foundValue) { 
            // If no such node exists - then we failed to find value
            if (!current) return undefined;

            // If we found what we're looking for - break
            if (current.value === value) {
                foundValue = true;
                break;
            }

            // Othwerwise, keep traversing tree until we find it or no node exists
            if (value < current.value) {
                previous = current;
                current = current.left;
                placement = 'left';
            }
            else if(value > current.value) { 
                previous = current;
                current = current.right;
                placement = 'right';
            }

        }

        return [previous,placement];

    }

    // Find node - remove it from parent node, basically cut this branch (or leaf if it's a barren node)
    remove(value) { 
        // Save removed node ti return later
        const foundNode = this.find(value);
        if (!foundNode) return undefined;

        const [parent, side] = this.findParent(value);
        parent[side] = null;
        return foundNode;
    }

}

class Node { 
    constructor(value) { 
        this.value = value;
        this.left = null;
        this.right = null;
    }
    // Using left/right for readability - though it would be more verbose to write as leftChild and rightChild
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


