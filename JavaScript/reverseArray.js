// Reverse Array of Characters In-Place

const reverse = arr => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		let temp = arr[left];

		arr[left] = arr[right];
		arr[right] = temp;

		left++;
		right--;
	}
	return arr;
};

// Test
const array = ['a', 'b', 'c'];
console.log(reverse(array));
