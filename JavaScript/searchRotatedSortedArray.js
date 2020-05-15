const searchArray = (arr, target) => {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return mid;
		}

		// check which side of array is sorted
		if (arr[left] <= arr[mid]) {
			// if left side sorted
			if (arr[left] <= target && target <= arr[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
			// if right side sorted
		} else {
			if (arr[mid] <= target && target <= arr[right]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
};
