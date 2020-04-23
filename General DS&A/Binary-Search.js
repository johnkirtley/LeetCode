const binarySearch = (arr, target) => {
	// Setting minimum and maximum indexes.
	let floor = -1;
	let ceiling = arr.length;

	while (floor + 1 < ceiling) {
		// Getting array length.
		const distance = ceiling - floor;

		// Calculating middle of array.
		const halfDistance = Math.floor(distance / 2);

		// Setting initial search position to the middle index.
		const guessIndex = floor + halfDistance;
		const guessValue = arr[guessIndex];

		if (guessValue === target) {
			return true;
		}

		// Target less than middle. Eliminate right side of array.
		if (guessValue > target) {
			// Set new max index to middle
			ceiling = guessIndex;
		} else {
			// Target must be greater than middle. Eliminate left side of array.
			floor = guessIndex;
		}
	}

	// Return false if target not found in array
	return false;
};

// Test

const nums = Array.from(Array(25).keys());
console.log(binarySearch(nums, 100));
