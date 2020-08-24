const removeDuplicates = (arr) => {
	const hash = {};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];

		if (!hash[current]) {
			hash[current] = arr[i];
		}
	}

	return Object.values(hash);
};
// test
const array = [1, 1, 2, 2, 2, 3, 3];
console.log(removeDuplicates(array));
