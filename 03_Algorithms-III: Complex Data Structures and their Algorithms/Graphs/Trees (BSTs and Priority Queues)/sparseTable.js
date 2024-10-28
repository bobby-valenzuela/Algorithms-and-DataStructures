class SparseTable {
    constructor(array) {
        this.array = array;                   // Original array
        this.n = array.length;                 // Length of the array
        this.log = Math.floor(Math.log2(this.n)) + 1; // Logarithmic length for table width
        this.table = Array.from({ length: this.n }, () => Array(this.log).fill(0));

        // Initialize the table
        this.buildTable();
    }

    // Build the Sparse Table
    buildTable() {
        // Fill the first level of the table (1-length intervals)
        for (let i = 0; i < this.n; i++) {
            this.table[i][0] = this.array[i];
        }

        // Fill in each level of the table
        for (let j = 1; (1 << j) <= this.n; j++) {
            for (let i = 0; (i + (1 << j) - 1) < this.n; i++) {
                // Merge results from two halves of the interval [i, i + 2^j - 1]
                this.table[i][j] = Math.min(this.table[i][j - 1], this.table[i + (1 << (j - 1))][j - 1]);
            }
        }
    }

    // Query the minimum value in the range [L, R]
    rangeMinQuery(L, R) {
        const j = Math.floor(Math.log2(R - L + 1)); // Largest power of 2 that fits in the range
        return Math.min(this.table[L][j], this.table[R - (1 << j) + 1][j]);
    }
}

// Example usage
const array = [3, 5, 2, 5, 1, 7, 6, 3, 2];
const sparseTable = new SparseTable(array);

// Query minimum from index 1 to 4 (expecting 1)
console.log(sparseTable.rangeMinQuery(1, 4));  // Output: 1

// Query minimum from index 0 to 3 (expecting 2)
console.log(sparseTable.rangeMinQuery(0, 3));  // Output: 2

// A Sparse Table is a data structure useful for answering range queries efficiently, especially when you want to find minimum or maximum values over a range in a static array. It's especially optimized for idempotent operations like min, max, or gcd, meaning operations where applying them multiple times doesn’t change the result beyond the first application. Sparse Tables are known for quick query times (constant time, O(1)), but they require O(n log n) time and space to precompute the table.
