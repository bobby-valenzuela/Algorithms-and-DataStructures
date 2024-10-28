// An indexed priority queue extends the priority queue by allowing elements to be accessed and modified via an index. This structure maintains:
// Direct element access: Each element has an associated index, allowing for operations like decreasing the priority of a specific element at a known index (also called decrease-key or increase-key).
// This example assumes a min-priority queue, meaning the element with the lowest priority is always at the top.


class IndexedPriorityQueue {
    constructor(maxSize = 100) {
        this.maxSize = maxSize;                             // Maximum number of elements in the queue
        this.size = 0;                                      // Current number of elements in the queue
        this.keys = [];                                     // Array to store the keys (indices of the elements)
        this.values = [];                                   // Array to store the values (priorities)
        this.positions = Array(maxSize).fill(-1);    // Position of each element in the queue
    }

    // Helper function to swap elements in the queue (used for reordering)
    swap(i, j) {
        [this.keys[i], this.keys[j]] = [this.keys[j], this.keys[i]];
        this.positions[this.keys[i]] = i;
        this.positions[this.keys[j]] = j;
    }

    // Insert a new key with a priority (value) into the queue
    insert(key, value) {
        if (this.size >= this.maxSize) {
            throw new Error("Queue is full");
        }
        if (this.positions[key] !== -1) {
            throw new Error("Key is already in the queue");
        }

        // Insert the key at the end of the queue
        this.keys[this.size] = key;         // Save the index of this element
        this.values[key] = value;           // Save the value of this element
        this.positions[key] = this.size;    // Save element to next available (last) position (for now - will bubble up as needed next)
        this.size++;

        // Move the new element to the correct position (heapify up)
        this.bubbleUp(this.size - 1);
    }

    // Remove and return the key with the smallest priority (min element)
    removeMin() {
        if (this.size === 0) {
            throw new Error("Queue is empty");
        }

        // The minimum element is at the root of the heap
        const minKey = this.keys[0];
        this.swap(0, this.size - 1);
        this.positions[minKey] = -1;
        this.size--;

        // Restore the heap property
        this.bubbleDown(0);

        return minKey;
    }

    // Decrease the priority (value) of a given key
    decreaseKey(key, newValue) {
        if (this.positions[key] === -1) {
            throw new Error("Key is not in the queue");
        }

        // Update the value and restore heap order
        this.values[key] = newValue;
        this.bubbleUp(this.positions[key]);
    }

    // Bubble up to restore heap property
    bubbleUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.values[this.keys[index]] >= this.values[this.keys[parent]]) {
                break;
            }

            this.swap(index, parent);
            index = parent;
        }
    }

    // Bubble down to restore heap property
    bubbleDown(index) {
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.size && this.values[this.keys[left]] < this.values[this.keys[smallest]]) {
                smallest = left;
            }
            if (right < this.size && this.values[this.keys[right]] < this.values[this.keys[smallest]]) {
                smallest = right;
            }

            if (smallest === index) {
                break;
            }

            this.swap(index, smallest);
            index = smallest;
        }
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Example usage of IndexedPriorityQueue
const ipq = new IndexedPriorityQueue(10);

// Insert elements
ipq.insert(0, 5);  // Insert key 0 with priority 5
ipq.insert(1, 3);  // Insert key 1 with priority 3
ipq.insert(2, 8);  // Insert key 2 with priority 8

// Remove the element with the smallest priority
console.log(ipq.removeMin());  // Output: 1 (key with priority 3)

// Decrease the priority of key 2 to 1
ipq.decreaseKey(2, 1);

// Remove the element with the smallest priority again
console.log(ipq.removeMin());  // Output: 2 (key with new priority 1)

