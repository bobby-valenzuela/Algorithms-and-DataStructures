// A HashTable Class (using separate chaining to handle collisions)
class HashTable {
    // Default size of 53 (prime number)
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total;
    }

    // Add in a new key/value pair
    set(key, value) {
        let index = this._hash(key);

        // Since we're using Separate Chaining to handle collisions, this means we can store multiple things in the same index (by adding them within another array, for example array[2] could have two things: arr[2][0] and arr[2][1])
        if (!this.keyMap[index]) {
            this.keyMap[index] = []
        }

        // Now that we've got an array stored at this index, we can insert our subarrays
        this.keyMap[index].push([key, value]);

    }

    // Get value from a key
    get(key) {
        let index = this._hash(key);
        // There may be something stored at this same index. Since we're using Separate Chaining to handle collisions, this means we can store multiple things in the same index (by adding them within another array, for example array[2] could have two things: arr[2][0] and arr[2][1])

        // Check if anything is yet stored at this index
        if (this.keyMap[index]) {

            // Find the one that has the same key value
            for (let el of this.keyMap[index]) {
                // Format: [key, value]
                if (el[0] === key) return el[1];
            }
        }

        return undefined;
    }

    // Get all unique keys
    keys() {

        const keysArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {

            // For each index we check - verify something is actually There
            if (this.keyMap[i]) {

                // Loop though all items in this subarray
                for (let j = 0; j < this.keyMap[i].length; j++) {

                    if (!keysArr.includes(this.keyMap[i][j][0])) keysArr.push(this.keyMap[i][j][0])


                }

            }


        }

        // Already should be free of dups - but could use [...new Set(keysArr)] if we're feeling crazy
        return keysArr;
    }

    // Get all unique hash value
    values() {

        const valuesArr = [];

        for (let i = 0; i < this.keyMap.length; i++) {

            // For each index we check - verify something is actually There
            if (this.keyMap[i]) {

                // Loop though all items in this subarray
                for (let j = 0; j < this.keyMap[i].length; j++) {

                    if (!valuesArr.includes(this.keyMap[i][j][1])) valuesArr.push(this.keyMap[i][j][1])


                }

            }


        }

        // Already should be free of dups - but could use [...new Set(valuesArr)] if we're feeling crazy
        return valuesArr;
    }


}


let ht = new HashTable();
// Key values must be lowercase since we're using [let value = char.charCodeAt(0) - 96] to get key code

ht.set("hello world", "Goodbye");
ht.set("color1", "blue");
ht.set("color2", "yellow");

console.log(ht.get("color2"))

// Get all value
const values = ht.values();
console.log(values)

// Get all keys
const keys = ht.keys();
console.log(keys)



ht.keys().forEach(e => console.log(`TEST: ${e}`))
