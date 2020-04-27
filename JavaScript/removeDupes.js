const removeDuplicates = (arr) => {
	let hash = {};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		if (!hash[current]) {
			hash[current] = arr[i];
		}
	}

	return Object.values(hash);
};

// test
const array = [1, 1, 2];
console.log(removeDuplicates(array));
