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
			next: null,
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
		let arr = [];
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

	reverse() {
		if (!this.head.next) {
			return this.head;
		}

		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const temp = second.next;

			second.next = first;
			first = second;
			second = temp;
		}
		this.head.next = null;
		this.head = first;
		return this.printList();
	}
}

const myList = new LinkedList(5);
myList.append(7);
myList.append(9);
myList.prepend(12);
myList.remove(1);
myList.reverse();
myList.append(20);
myList.reverse();

console.log(myList.printList());
