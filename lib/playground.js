class Dog {

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.foods = new Array();
    this.drinks = new Object();
  }

  eat(food) {
    this.foods.push(food);
  }

  drink(drink, ounces) {
    if (!drinks[drink]) {
      this.drinks[drink] = ounces;
    } else {
      this.drinks[drink] += ounces;
    }
  }

  bark() {
    return `woof woof`;
  }

  sit() {
    return `sitting`;
  }

}

class myArray {

  constructor() {
    this.store = new Array();
    this.length = 0;
  }

  // myPush

  myPush(ele) {
    this.store.push(ele);
    this.length++;
    return this.length;
  }

  // myPop

  myPop() {
    this.length--;
    return this.store.pop();
  }
  // length

  // for the following, you CANNOT use built in JS#Array methods
  // myIndexOf

  myIndexOf(ele) {
    for (let i = 0; i < this.store.length; i++) {
      if (ele === this.store[i]) return i;
    }

    return -1;
  }

  // myIncludes

  myIncludes(ele) {
    for (let i = 0; i < this.store.length; i++) {
      if (ele === this.store[i]) return true;
    }

    return false;
  }

  // myForEach

  myForEach(callback) {
    for (let i = 0; i < this.store.length; i++) {
      callback(this.store[i]);
    }

    return undefined;
  }

  // bonus: myMap

  myMap(callback) {
    const mapped = new Array();

    for (let i = 0; i < this.store.length; i++) {
      mapped.push(callback(this.store[i]));
    }

    return mapped;
  }

  // bonus: myFilter

  myFilter(callback) {
    const filtered = new Array();

    for (let i = 0; i < this.store.length; i++) {
      const ele = this.store[i];

      if (callback(ele)) filtered.push(ele);
    }

    return filtered;
  }

  // bonus: mySlice

  mySlice(start, end) {
    if (!end || end > this.length) end = this.length;
    const sliced = new Array();

    for (let i = start; i < end - 1; i++) {
      sliced.push(this.store[i]);
    }

    return sliced;
  }

}

// const arr = new myArray();
// arr.myPush(1);
// arr.myPush(2);
// arr.myPush(3);
// arr.myPush(4);
// arr.myPush(5);
// arr.myPush(6);
// arr.myPush(7);
// arr.myPush(8);

// // console.log(arr.length);
// console.log(arr.store);

// const res = arr.mySlice(2, 4);
// const res2 = arr.mySlice(3);

// console.log(res);
// console.log(res2);

class Stack { // LIFO - last in, first out

  constructor() {
    this.store = new Array();
  }

  push(ele) { // O(1)
    this.store.push(ele);
    return true;
  }

  pop() { // O(1)
    this.store.pop();
  }

  peek() { // O(1)
    return this.store[this.store.length - 1];
  }

  size() { // O(1)
    return this.store.length;
  }

}

class Queue { // FIFO - first in, first out

  constructor() {
    this.store = new Array();
  }

  enqueue(ele) { // O(1)
    this.store.push(ele);
  }

  dequeue() { // O(n)
    return this.store.shift();
  }

  size() { // O(1)
    return this.store.length;
  }

  peek() { // O(1)
    return this.store[0];
  }

}

class _Node {

  constructor(value) {
    this.value = value;
    this.next = null;
  }

}

class LinkedList {

  constructor() { 
    this.head = null;
    // added to turn add into O(1) operation
    this.tail = null;
  }

  add(value) {
    if (!this.head) {
      const newNode = new _Node(value)

      this.head = newNode;
      this.tail = newNode;
    } else {
      this._addToTail(value);
      // this._add(value);
    }
  }

  // _add(value) { // 3
  //   let curr = this.head; // {1}

  //   while (curr.next) { // curr = {2}
  //     curr = curr.next; 
  //   }
  //   // curr = {2}
  //   curr.next = new _Node(value); // {1} => {2} => {3}
  // }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next
    }

    return count;
  }
                         
  removeFromHead() {
    const oldHead = this.head;
    const newHead = oldHead.next; 

    this.head = newHead;
  }

  _addToTail(value) {
    const newTail = new _Node(value);
    const prevTail = this.tail;
    prevTail.next = newTail;
    this.tail = newTail;
  }

}

// newTail = {4}
// prevTail = {3}
// {3}.next = {4}
// this.tail = {4}

// {1} => {2} => {3} => {4}
const ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);

console.log(ll.size());


