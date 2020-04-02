class newNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const Node = new newNode(value);

		this.tail.next = Node;
		this.tail = Node;
		this.length++;
		return this;
	}

	prepend(value) {
		const Node = new newNode(value);

		Node.next = this.head;
		this.head = Node;
		this.length++;
		return this;
	}

	printList() {
		const arr = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return arr;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}

	insert(index, value) {
		if (index === 0) {
			this.prepend(value);
			return this.printList();
		}
	}
}

const newLL = new LinkedList(10);

newLL.append(12);
newLL.prepend(14);
newLL.append(20);
newLL.insert(0, 99);
newLL.remove(2);

console.log(newLL.printList());
