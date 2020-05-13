const firstRecurringCharacter = (arr) => {
	let hash = {};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];

		if (!hash[current]) {
			hash[current] = 1;
		} else {
			return current;
		}
	}
};

console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 2, 3, 1]));
