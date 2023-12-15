/* 

Deque or Double Ended Queue is a type of queue in which 
insertion and removal of elements can either be performed 
from the front or the rear. Thus, it does not follow 
FIFO rule (First In First Out).

Input Restricted Deque - input is restricted at a single end but allows deletion at both the ends.
Output Restricted Deque - output is restricted at a single end but allows insertion at both the ends.
*/
namespace Deque {
  type Node<T> = {
    value: T,
    next: Node<T>,
    prev: Node<T>
  }

  class Deque {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    isEmpty() {
      return this.size === 0;
    }

    pushFront(value) {
      const newNode = new Node(value);

      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }

      this.size++;
    }

    pushBack(value) {
      const newNode = new Node(value);

      if (this.isEmpty()) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.size++;
    }

    popFront() {
      if (this.isEmpty()) {
        return null;
      }

      const removedValue = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.size--;
      return removedValue;
    }

    popBack() {
      if (this.isEmpty()) {
        return null;
      }

      const removedValue = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

      this.size--;
      return removedValue;
    }

    peekFront() {
      return this.isEmpty() ? null : this.head.value;
    }

    peekBack() {
      return this.isEmpty() ? null : this.tail.value;
    }

    getSize() {
      return this.size;
    }
  }
}

// Example usage:
const deque = new Deque();
deque.pushFront(1);
deque.pushBack(2);
deque.pushFront(3);
console.log(deque.peekFront()); // Output: 3
console.log(deque.peekBack()); // Output: 2
console.log(deque.popFront()); // Output: 3
console.log(deque.popBack()); // Output: 2
console.log(deque.getSize()); // Output: 1
