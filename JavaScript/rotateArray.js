const rotateArray = (arr, k) => {
	let shiftCount = 0;

	while (shiftCount !== k) {
		let last = arr.pop();
		arr.unshift(last);
		shiftCount++;
	}
	return arr;
};

// test
const array = [1, 2, 3, 4, 5, 6];
const num = 2;

console.log(rotateArray(array, num));
