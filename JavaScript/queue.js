class newNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}

	enqueue(value) {
		const Node = new newNode(value);

		if (this.length === 0) {
			this.first = Node;
			this.last = Node;
		} else {
			this.last.next = Node;
			this.last = Node;
		}
		this.length++;
		return this;
	}

	dequeue() {
		if (!this.first) {
			return null;
		}

		if (this.first === this.last) {
			this.last = null;
		}

		const holdingPointer = this.first;
		this.first = this.first.next;
		this.length--;
		return holdingPointer;
	}
}

const newQueue = new Queue();

newQueue.enqueue('John');
newQueue.enqueue('Jackie');
newQueue.enqueue('Jordan');
newQueue.peek();
newQueue.dequeue();
newQueue.dequeue();
newQueue.enqueue('Hello');
newQueue.dequeue();

console.log(newQueue);
