const rotateArray = (arr, k) => {
	let count = 0;

	while (count !== k) {
		let num = arr.pop();
		arr.unshift(num);
		count++;
	}
	return arr;
};

// test
const array = [1, 2, 3, 4, 5, 6];
const num = 2;

console.log(rotateArray(array, num));
