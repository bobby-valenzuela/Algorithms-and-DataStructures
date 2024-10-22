My Working through several courses/books on Data Structures and Algorithms.  <br/ >  

_Courses_
- [JavaScript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/?couponCode=KEEPLEARNING)
- [Master the Coding Interview: Data Structures + Algorithms](https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/?couponCode=KEEPLEARNING)
- [Discrete Mathematics](https://www.udemy.com/course/discrete-math/?couponCode=KEEPLEARNING)

<br />

_Books_
- [Data Structures the Fun Way](https://nostarch.com/data-structures-fun-way)
- [Dive Into Algorithms](https://nostarch.com/Dive-Into-Algorithms)
- [A Programmer's Guide to Computer Science](https://a.co/d/5VxeUjr)

<br />

## General Algorithms  
| Algorithm        | Time Complexity (Best/Average/Worst)  | Space Complexity | Stability | Ideal Use Case                               |
|------------------|---------------------------------------|------------------|-----------|----------------------------------------------|
| **Bubble Sort**  | O(n) / O(n²) / O(n²)                  | O(1)             | Stable    | Small, mostly sorted datasets                |
| **Insertion Sort**| O(n) / O(n²) / O(n²)                 | O(1)             | Stable    | Small or mostly sorted datasets              |
| **Merge Sort**   | O(n log n) / O(n log n) / O(n log n)  | O(n)             | Stable    | Large datasets requiring stability           |
| **Quick Sort**   | O(n log n) / O(n log n) / O(n²)       | O(log n)         | Unstable  | Large datasets with randomized data          |
| **Selection Sort**| O(n²) / O(n²) / O(n²)                | O(1)             | Unstable  | Small datasets or memory-constrained env.    |
| **Radix Sort**   | O(nk) / O(nk) / O(nk)                 | O(n + k)         | Stable    | Large numbers or fixed-length strings        |
| **Heap Sort**    | O(n log n) / O(n log n) / O(n log n)  | O(1)             | Unstable  | Large datasets with limited memory           |
| **Counting Sort**| O(n + k) / O(n + k) / O(n + k)        | O(k)             | Stable    | Datasets with a limited range of values      |
| **Shell Sort**   | O(n log n) / O(n^1.5) / O(n²)         | O(1)             | Unstable  | Moderate-sized, unsorted datasets            |

<br />  

## Data Structures: Summary Table of Big O Notations

| Data Structure               | Access  | Search       | Insertion    | Deletion     |
|------------------------------|---------|--------------|--------------|--------------|
| **Array**                    | O(1)    | O(n)         | O(n)         | O(n)         |
| **Singly Linked List**        | O(n)    | O(n)         | O(1) (head)  | O(n)         |
| **Doubly Linked List**        | O(n)    | O(n)         | O(1) (head/tail) | O(n)      |
| **Stack**                    | O(n)    | O(n)         | O(1)         | O(1)         |
| **Queue**                    | O(n)    | O(n)         | O(1)         | O(1)         |
| **Binary Search Tree (Balanced)** | O(log n) | O(log n) | O(log n)    | O(log n)     |
| **Hash Table**               | O(1)    | O(1) on average | O(1) on average | O(1) on average |
| **Heap**                     | O(1)    | O(n)         | O(log n)     | O(log n)     |
| **Trie**                     | O(m)    | O(m)         | O(m)         | O(m)         |

<br />  

### Data Structure: Choosing the Right Data Structure

- **Need Fast Access by Index:** Use **Arrays**.
- **Frequent Insertions/Deletions:** Use **Linked Lists**.
- **Last-In-First-Out Access:** Use a **Stack**.
- **First-In-First-Out Access:** Use a **Queue**.
- **Hierarchical Data:** Use **Trees** or **Tries**.
- **Fast Key-Based Lookup:** Use **Hash Tables**.
- **Priority-Based Processing:** Use **Heaps**.
- **Complex Relationships:** Use **Graphs**.

<br />

## Graph Traversal: Breadth-First Search (BFS) vs Depth-First Search (DFS)


| **Feature**                | **Breadth-First Search (BFS)**                     | **Depth-First Search (DFS)**                        |
|----------------------------|----------------------------------------------------|----------------------------------------------------|
| **Exploration Strategy**    | Explores the closest (neighboring) nodes first, level by level. | Explores as deep as possible along a branch before backtracking. |
| **Memory Usage**            | High memory usage since it needs to store all the nodes at the current level. | Low memory usage, only requires space proportional to the depth of the tree/graph. |
| **Time Complexity**         | O(V + E), where V is the number of vertices and E is the number of edges. | O(V + E), same as BFS, but can have more recursive calls. |
| **Shortest Path Guarantee** | **Yes**, BFS finds the shortest path in an unweighted graph. | **No**, DFS does not guarantee the shortest path unless explored fully. |
| **Space Complexity**        | O(V) for storing nodes at each level.              | O(V) in worst case, can go up to O(h), where h is the height of the tree (for recursive stack). |
| **Best Use Cases**          | When searching for the shortest path, unweighted graphs, or searching through layers like social networks, word ladders, etc. | Suitable for deeper problem spaces, like maze traversal, puzzle-solving, or topological sorting. |
| **Drawbacks**               | High memory requirements in wide or large graphs. | Can get stuck going down deep paths (especially in infinite graphs), and might not find the optimal solution. |
| **Applications**            | - Shortest path in unweighted graphs<br>- Web crawlers<br>- Level-order traversal of trees<br>- Network broadcasting | - Topological sorting<br>- Finding connected components<br>- Solving mazes or puzzles<br>- Backtracking problems |

<br />

__When to Prefer One Over the Other:__
- Use BFS when you need the shortest path or are dealing with an unweighted graph where you want to explore the closest nodes first.
- Use DFS when you are dealing with deeper search spaces, have memory constraints, or are solving backtracking problems like puzzles or mazes.  
