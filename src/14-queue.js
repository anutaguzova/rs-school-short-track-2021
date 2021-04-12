const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.capacity = 0;
    this.tail = null;
  }

  get size() {
    return this.capacity;
  }

  enqueue(element) {
    const ball = List.createNode(element);
    if (this.capacity < 1) {
      this.head = ball;
      this.tail = ball;
    } else {
      this.tail.next = ball;
      this.tail = ball;
    }
    this.capacity++;
  }

  dequeue() {
    const el = this.head;
    this.head = this.head.next;
    if (this.head == null) this.tail = null;
    this.capacity--;
    return el.value;
  }
}

module.exports = Queue;
