class FenwickTree {
    constructor(size) {
        this.size = size;
        this.tree = new Array(size + 1).fill(0); // Tree is 1-indexed
    }

    // Update the tree at index 'i' by adding 'value'
    update(index, value) {
        while (index <= this.size) {
            this.tree[index] += value;
            index += index & -index; // Move to the next index
        }
    }

    // Get the prefix sum from 1 to 'index'
    prefixSum(index) {
        let sum = 0;
        while (index > 0) {
            sum += this.tree[index];
            index -= index & -index; // Move to the parent node
        }
        return sum;
    }

    // Get the sum between two indices (left and right inclusive)
    rangeSum(left, right) {
        return this.prefixSum(right) - this.prefixSum(left - 1);
    }
}

// Example usage:
const fenwick = new FenwickTree(10);

// Update values at different indices
fenwick.update(1, 5);  // Adds 5 at index 1
fenwick.update(3, 7);  // Adds 7 at index 3
fenwick.update(5, 2);  // Adds 2 at index 5

// Query the prefix sum
console.log(fenwick.prefixSum(5));  // Output: 14 (5 + 7 + 2)

// Query the range sum
console.log(fenwick.rangeSum(1, 5)); // Output: 14 (sum from index 1 to 5)

