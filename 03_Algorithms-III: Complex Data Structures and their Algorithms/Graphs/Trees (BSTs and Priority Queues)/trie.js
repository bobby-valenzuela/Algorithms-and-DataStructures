
// Node contains a hash/map of keys and an end property
class Node {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }

}




class Trie {

  constructor() {
    this.root = new Node();
  }

  add(input, node = this.root) {
    // When we call this method on our script - we won't pass in a node, so the root will be the default


    // If we've reached the end of the string...
    if (input.length === 0) {   
        node.setEnd();
        return;
    } 
    else {
        // Starting with the root node, we adding the first characyer of our string to the root node (if it doesn't exist) and for every subsequent character, we're adding it as a "child" node of each previous character``
        
        // If we're adding a key we haven't seen yet on this node, add it 
        if (!node.keys.has(input[0])) {
            // Add key and set value to a new node
            node.keys.set(input[0], new Node());
        }

        // Recursively call this add method again, but pass in the rest of the string (without 1st char) and use new node as the node to pass in
        return this.add( input.substr(1), node.keys.get(input[0]) );
    } 

  }


  isWord(word) {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) {
        return false;
      } else {
        node = node.keys.get(word[0]);
        word = word.substr(1);
      }
    }
    return node.keys.has(word) && node.keys.get(word).isEnd();
  }

  print() {
    const words = [];
    const search = (node, string) => {
      if (node.keys.size !== 0) {
        for (let letter of node.keys.keys()) {
          search(node.keys.get(letter), string + letter);
        }
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        if (string.length > 0) {
          words.push(string);
        }
      }
    };
    search(this.root, "");
    return words.length > 0 ? words : [];
  }
}

// Example Usage
const myTrie = new Trie();
myTrie.add("ball");
myTrie.add("bat");
myTrie.add("doll");
myTrie.add("dork");
myTrie.add("do");
myTrie.add("dorm");
myTrie.add("send");
myTrie.add("sense");

console.log(myTrie.isWord("doll")); // true
console.log(myTrie.isWord("dor")); // false
console.log(myTrie.isWord("dorf")); // false
console.log(myTrie.print()); // [ 'ball', 'bat', 'doll', 'do', 'dork', 'dorm', 'send', 'sense' ]

