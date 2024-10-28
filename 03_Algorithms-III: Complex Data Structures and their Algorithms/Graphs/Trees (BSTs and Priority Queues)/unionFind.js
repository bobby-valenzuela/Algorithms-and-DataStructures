// Also called a disjoint-set

class UnionFind {
    constructor(size) {
        // Initialize the `parent` array where each element is its own parent (self-rooted).
        this.parent = Array.from({ length: size }, (_, i) => i);

        // `rank` array helps to keep the tree flat. Initially, each node has a rank of 1.
        this.rank = Array(size).fill(1);
    }

    /**
     * Find the root of the element 'x'.
     * This is the "Find" operation.
     * With path compression, we make elements point directly to the root.
     */
    find(x) {
        // If 'x' is not the root of itself, recursively find the root.
        if (this.parent[x] !== x) {
            // Path Compression: update the parent of 'x' to be its root
            this.parent[x] = this.find(this.parent[x]);
        }
        // Return the root of 'x'.
        return this.parent[x];
    }

    /**
     * Unify the sets containing 'x' and 'y'.
     * This is the "Union" operation.
     */
    union(x, y) {
        // Find the root of each element
        let rootX = this.find(x);
        let rootY = this.find(y);

        // If they are already in the same set, do nothing.
        if (rootX === rootY) return;

        // Union by Rank: attach the smaller tree under the root of the larger tree.
        if (this.rank[rootX] > this.rank[rootY]) {
            // Root of 'y' points to root of 'x'
            this.parent[rootY] = rootX;
        } else if (this.rank[rootX] < this.rank[rootY]) {
            // Root of 'x' points to root of 'y'
            this.parent[rootX] = rootY;
        } else {
            // If ranks are equal, choose one as root and increase its rank.
            this.parent[rootY] = rootX;
            this.rank[rootX] += 1;
        }
    }

    /**
     * Check if 'x' and 'y' are in the same set.
     * This function uses "Find" to see if they share the same root.
     */
    connected(x, y) {
        return this.find(x) === this.find(y);
    }
}

// Usage Example:
const uf = new UnionFind(10);  // Create Union-Find for 10 elements (0 to 9)

// Unite elements into sets
uf.union(0, 1);  // Connect 0 and 1
uf.union(1, 2);  // Connect 1 and 2, meaning 0, 1, 2 are now in the same set

// Check if two elements are in the same set
console.log(uf.connected(0, 2));  // true, because 0 and 2 are connected through 1
console.log(uf.connected(0, 3));  // false, 0 and 3 are in different sets

// Find root of an element
console.log(uf.find(2));  // Returns the root of the set containing 2
