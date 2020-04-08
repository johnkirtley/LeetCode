class newNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value) {
		const Node = new newNode(value);

		if (this.length === 0) {
			this.top = Node;
			this.bottom = Node;
			this.length++;
		} else {
			const holdingPointer = this.top;
			this.top = Node;
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.top) {
			return null;
		}

		if (this.top === this.bottom) {
			this.bottom = null;
		}

		const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;
		return holdingPointer;
	}
}

const newStack = new Stack();

newStack.push('Google');
newStack.push('Amazon');
newStack.pop();
newStack.pop();
newStack.pop();
newStack.push('John');
console.log(newStack);
