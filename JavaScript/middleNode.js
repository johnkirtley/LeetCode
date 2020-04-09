const middleNode = (head) => {
	let initial = head;
	let length = 0;

	while (initial.next !== null) {
		initial = initial.next;
		length++;
	}

	let middleIndex = Math.ceil(length / 2);
	let findNode = head;
	let counter = 0;

	while (counter !== middleIndex) {
		findNode = findNode.next;
		counter++;
	}
	return findNode;
};
