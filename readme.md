# Daily Solved LeetCode Problems

This repository is a personal documentation of my Data Structures and Algorithms (DSA) learning journey.

It contains structured notes and solutions to LeetCode problems solved by **Sweta Dahal**.

The goal of this repository is not just problem-solving, but also building a strong understanding of core concepts and patterns used in competitive programming and technical interviews.

---

# Learning Journey

I am following structured learning resources and solving problems daily as part of my **Grind 75** preparation.

### Grind 75 Progress
- Started at **Day 3**
- Consistently building topic-wise understanding
- Documenting concepts for revision and mastery

---

# Resources

These are the main resources we can follow for learning DSA:

- **Algo Monster Course**
- **Abdul Bari (YouTube)**
- **Michael Sambol (YouTube)**
- **NeetCode**

---

# Topics Covered

---

## 1. Arrays & Hashmaps

### Array

An array is a linear data structure that stores elements in contiguous memory locations. Each element can be accessed directly using its index.

### Properties:
- Fast access using index → **O(1)**
- Insertion and deletion are expensive → **O(n)** (due to shifting)

### Key Concepts:
- Indexing
- Traversal
- Prefix sums
- In-place operations
- Time vs Space optimization tradeoffs

---

### Hashmap

A hashmap (hash table) stores data in key-value pairs and uses a hash function to map keys to indices.

### Properties:
- Average time complexity: **O(1)** for insert, delete, and lookup

### Key Concepts:
- Hashing function
- Collision handling techniques (chaining, open addressing)
- Load factor
- Frequency counting
- Fast lookup optimization

---

## 2. Two Pointers & Sliding Window

---

### Two Pointers

The two-pointer technique uses two indices to traverse a data structure efficiently, often reducing brute force solutions.

### Why use it?
- Reduces complexity from **O(n²) → O(n)**

### Use Cases:
- Sorted arrays
- Pair sum problems
- Reversing arrays
- Partitioning problems

---

### Sliding Window

A sliding window maintains a subarray (window) and moves it across the data structure dynamically.

### Key Concepts:
- Expanding window
- Shrinking window
- Maintaining state efficiently
- Subarray / substring optimization

### Use Cases:
- Longest substring problems
- Fixed/variable size window problems

---

## 3. Trees (DFS & BFS)

---

### Tree

A tree is a hierarchical data structure consisting of nodes connected by edges, with no cycles.

### Key Concepts:
- Root node
- Leaf node
- Height and depth
- Binary Tree
- Binary Search Tree (BST)

---

### DFS (Depth First Search)

DFS explores as deep as possible along a branch before backtracking.

### Types:
- Preorder (Root → Left → Right)
- Inorder (Left → Root → Right)
- Postorder (Left → Right → Root)

### Implementation:
- Recursion
- Stack

---

### BFS (Breadth First Search)

BFS explores nodes level by level using a queue.

### Use Cases:
- Level order traversal
- Shortest path in unweighted trees

---

## 4. Graphs (DFS, BFS, Topological Sort)

---

### Graph

A graph is a set of nodes (vertices) connected by edges. It can be directed or undirected.

### Key Concepts:
- Adjacency list
- Adjacency matrix
- Cycles
- Connectivity

---

### DFS (Graph)

- Used for deep traversal
- Helps in cycle detection
- Used for connected components

---

### BFS (Graph)

- Used for shortest path in unweighted graphs
- Level-wise traversal

---

### Topological Sort

Topological sorting is a linear ordering of nodes in a Directed Acyclic Graph (DAG).

### Condition:
For every directed edge `u → v`, node `u` must appear before `v`.

### Key Concepts:
- In-degree tracking
- Kahn’s Algorithm (BFS approach)
- DFS-based ordering

---

## 5. Binary Search

Binary search is an efficient algorithm for finding elements in a sorted array by repeatedly dividing the search space in half.

### Time Complexity:
- **O(log n)**

### Key Concepts:
- Mid calculation
- Search space reduction
- Monotonic function idea
- Binary search on answer problems

---

## 6. Dynamic Programming (DP)

Dynamic Programming is a method for solving problems by breaking them into smaller overlapping subproblems and storing results.

### Key Concepts:
- Overlapping subproblems
- Optimal substructure
- Memoization (Top-down approach)
- Tabulation (Bottom-up approach)
- State definition
- Transition relation

---

## 7. Backtracking

Backtracking is a recursive technique that builds solutions step-by-step and removes them if they are invalid.

### Key Concepts:
- Recursion tree
- Choose → Explore → Unchoose
- Pruning invalid paths

### Use Cases:
- Permutations
- Combinations
- N-Queens
- Subset problems

---

## 8. Heap (Priority Queue)

A heap is a complete binary tree used to efficiently access the minimum or maximum element.

### Key Concepts:
- Min Heap
- Max Heap
- Insert operation
- Delete (extract min/max)
- Priority queue usage

---

# Goal

To strengthen problem-solving skills, understand DSA deeply, and become interview-ready through consistent practice and structured learning.

---

#  Note

This is a continuously evolving repository as I keep solving more problems and learning new patterns.