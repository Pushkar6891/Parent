# Data Structures and Algorithms

# Dinesh Varyani

Linear Data Structures (Single Level)
- Singly Linked List
- Doubly Linked List
- Circular Singly Linked List
- Arrays
- Stacks
- Queue
Non Linear Data Structure (Multi Level)
- Binary Tree
- Binary Search Tree
- Binary Heaps
- Graph
- Matrix
- Tries
Implmentation of Data Structures

# Data Structure
Way of organizing data
# Algorithm
Set of instructions to solve a given problem

public void findAverage(int a){
    int sum = a + b + c;
    int average = sum / 3;
    System.out.println(average);
}

# Analysis of Algorithm
1. Time Complexity
2. Space Complexity

# Find sum of n natural numbers
public int findSum(int n){
    return n * (n-1)/2;
}

public int findSum(int n){
    int sum = 0;
    for(int i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

# Time Complexity
Unit of time taken by algorithm to run

# Space Complexity
Amount of Space taken by an algorithm to run

# Asymptotic Analysis of an algorithm
Performance of an algorithm with increasing input size.

# Asymptotic Notations used for an algorithm
Car has different performance in different cases : in city, in city + in highway, in highway

# Types of Asymptotic Notations
Omega (Best Case / Lower Bound)
Theta (Average Case / Average Bound)
Big O (Worst Case / Upper Bound)

# Big O Notation Assumptions
Single Processor Machine
Every Operation (arithmetic + assignment + logical + return) takes 1 unit of time
We Drop Lower order terms, constant multipliers

# Calculating Time Complexity of Constant Algorithm
public int findSum(int x, int y){
    int result = x + y;                     // x,+,y,= 4 unit of time
    return result;                          // 2 unit of time
}

Total = 4+2 = 6 ~ Constant

public int get(int[] arr,int i){
    return arr[i];
}

Total Complexity = Constant (horizontal straight line graph)

- Constant

# Calculating Time Complexity of Linear Algorithm
public void findSumOfFirstNNaturalNumbers(int n){
    int sum = 0;                // 1 Step or 1 Unit of Time
    for(int i=1;i<=n;i++){      // 1 + 3(n+1) + 3n = 6n + 4
        sum = sum + i;          // n(1+1+1+1) = n
    }
    return sum;                 // 2
}

Complexity = 1 + 6n + 4 + n + 2 = n (Linear Curve at 45 degree graph)

# Calculating Time Complexity of Polynomial Algorithm
public void print(int n){
    for(int i=1;i<=n;i++){              // n
        for(int j=1;j<=n;j++){          // n(n)
            sop(i + " " + j);           // 1
        }
        sop("End of inner loop");       // 1
    }   
    sop("End of outer loop");           // 1
}

Complexity = O(n^2)  (Parabolic Curve graph)

# Singly LinkedList
Sequence of nodes
Node = data + reference to next node
First node is "Head Node"
Last node has data and points to null

Generic Implementation:
public class ListNode<T>{
    private T data;
    private ListNode<T> next;
}
Integer Implementation:
public class ListNode{
    private int data;
    private ListNode next;
}

Print Elements of SinglyLinkedList
Find Length of SinglyLinkedList
Insert Node at beginning of SinglyLinkedList
Insert Node at end of SinglyLinkedList
Insert Node at given position of SinglyLinkedList
Delete first Node of SinglyLinkedList
Delete last Node of SinglyLinkedList
Delete Node at given position of SinglyLinkedList
Search element in SinglyLinkedList
Reverse SinglyLinkedList
Find Middle Node in SinglyLinkedList
Find Nth Node from end of SinglyLinkedList
Remove Duplicates from sorted SinglyLinkedList
Insert Node in a sorted SinglyLinkedList
Remove a given key from SinglyLinkedList
Detect a Loop in SinglyLinkedList
Find start of loop in SinglyLinkedList
Floyd's Cycle Detection Algorithm
Remove a loop from SinglyLinkedList
Merge Two Sorted SinglyLinkedList
Add Two Numbers using SinglyLinkedList

# Doubly Linked List
# Circular Singly Linked List
# One Dimensional Array

## Ways to create / declaration of array
int[] arr;
int arr[]
## Ways to initialize array
arr = new int[10];
## Combining Declaration and Initialization of array
int[] arr = new int[10];
int[] arr = {9,8,2,6,3,9,6,4,6,5};

Declaration of an Array
Initialization of an Array
Adding Updating elements of an Array
Printing elements of an Array
Remove Even Elements from Array
Reverse an Array

# Multi Dimensional Array
# Stack
LIFO
top
push
pop

stack implementation using LinkedList


# Queue
# Binary Tree (0,1 or 2 max children)
Node
Leaf Node

Tree Node
data
left pointer
right pointer

InOrder : Left Root Right (4 2 5 1 3)
PreOrder : Root Left Right (1 2 4 5 3)
PostOrder : Left Right Root (4 5 2 3 1)

            1
    2               3
4       5
BFS : 1 2 3 4 5 (horizontal)
DFS : 4 2 5 

# Binary Search Tree (For faster Search and Insertion of data)
Left Subtree of node is lesser than node value
Right Subtree of node is greater than node value
Left and Right Subtree should also be a binary tree

# BST
            6
    4               8
2       8       7       9

# Not a BST
            6
    4               8
2       8       5       9

# Priority Queue
# Binary Heap

# Linear Search
# Binary Search

# Bubble Sort
# Insertion Sort
# Selection Sort
# Merge Sort
# Quick Sort

# Graph
# Adjacency Matrix
# BFS (Recursive + Iterative)
# DFS

# Dynamic Programming
# Kadane Algorithm
# Hashing

# Two Sum Problem
# First Non Repeating Character
# Sliding Window