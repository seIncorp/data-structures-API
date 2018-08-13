# data-structures-API

[![Build Status](https://travis-ci.org/seIncorp/data-structures-API.svg?branch=master)](https://travis-ci.org/seIncorp/data-structures-API)
[![codecov](https://codecov.io/gh/seIncorp/data-structures-API/branch/master/graph/badge.svg)](https://codecov.io/gh/seIncorp/data-structures-API)

For easy to use data structures in Javascript. Made in Vanilla Javascript.


This API was created for easy to use data structures in JS, for all those who does want spend time for creating it.


## Stack

* **1.1 Creating**
```
var st = DTA.Stack.new();
```
* **1.2 Fill stack**
```
DTA.Stack.fill(st, [7,8,9]);
```
* **1.3 Hard reseting stack**
```
DTA.Stack.reset(st)
```

### Stack class functions
* isEmpty
* peek
* push
* pop
* toArray
* toString

## LinkedList
* **1.1 Creating LinkedList**
```
var n = DTA.LinkedList.new();
```
* **1.2 Fill LinkedList**
```
DTA.LinkedList.fill(n,[5,1,1,8,9])
```
* **1.3 Hard reseting LinkedList**
```
DTA.LinkedList.reset(n);
```

### LinkedList class functions
* node
* append
* prepend
* deleteNode
* deleteNodes
* find
* toArray
* toArrayValues
* toString

## DoublyLinkedList
* **1.1 Creating DoublyLinkedList**
```
var n = DTA.DoublyLinkedList.new();
```
* **1.2 Fill DoublyLinkedList**
```
DTA.DoublyLinkedList.fill(n,[5,1,1,8,9])
```
* **1.3 Hard reseting DoublyLinkedList**
```
DTA.DoublyLinkedList.reset(n);
```

### DoublyLinkedList class functions
* node
* append
* prepend
* deleteNode
* deleteNodes
* find
* toArray
* toArrayValues
* toString

## Queue
* **1.1 Creating Queue**
```
var n = DTA.Queue.new();
```
* **1.2 Fill Queue**
```
DTA.Queue.fill(n,[5,1,1,8,9])
```
* **1.3 Hard reseting Queue**
```
DTA.Queue.reset(n);
```

### Queue class functions
* isEmpty
* peek
* enqueue
* dequeue
* toString

## BloomFilter
* **1.1 Creating BloomFilter**
```
var n = DTA.BloomFilter.new();
```
* **1.2 Fill BloomFilter**
```
DTA.BloomFilter.fill(n,['aa','vv','bb'])
```
* **1.3 Hard reseting BloomFilter**
```
DTA.BloomFilter.reset(n);
```

### BloomFilter class functions
* insert
* mayContain
