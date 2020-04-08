class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = [];
		this.last = [];
	}

	enqueue(value) {
		const length = this.first.length;
		for (let i = 0; i < length; i++) {
			this.last.push(this.first.pop());
		}
		this.last.push(value);
		return this;
	}

	dequeue() {
		const length = this.last.length;
		for (let i = 0; i < length; i++) {
			this.first.push(this.last.pop());
		}
		this.first.pop();
		return this;
	}
	peek() {
		if (this.last.length > 0) {
			return this.last[0];
		}
		return this.first[this.first.length - 1];
	}
}
const newQueue = new Queue();

newQueue.enqueue('Hello');
newQueue.dequeue();

console.log(newQueue);
