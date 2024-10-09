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
