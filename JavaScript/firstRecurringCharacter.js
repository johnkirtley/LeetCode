const firstRecurringCharacter = arr => {
	const hashTable = {};

	for (let i = 0; i < arr.length; i++) {
		if (!hashTable[arr[i]]) {
			hashTable[arr[i]] = true;
		} else if (hashTable[arr[i]]) {
			return arr[i];
		} else {
			return undefined;
		}
	}
};

console.log(firstRecurringCharacter([1, 2, 3, 4, 5, 2, 3, 1]));
