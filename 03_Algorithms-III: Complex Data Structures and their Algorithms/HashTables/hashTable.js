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

    set(key, value) {
        let index = this._hash(key);
        return index;
    }

    get() {

    }

}


let ht = new HashTable();
// Key values must be lowercase
console.log(ht.set("hello world", "Goodbye"));
