const countingElements = (arr) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === arr[i] + 1) {
				count++;
				break;
			}
		}
	}
	return count;
};

// test

let array = [1, 1, 3, 3, 5, 5, 7, 7];
console.log(countingElements(array));
