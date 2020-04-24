const threeSum = (arr) => {
	let sorted = arr.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < sorted.length - 2; i++) {
		if (sorted[i] > 0) {
			break;
		}

		if (i > 0 && sorted[i] === sorted[i - 1]) {
			continue;
		}

		let left = i + 1;
		let right = sorted.length - 1;

		while (left < right) {
			const sum = sorted[i] + sorted[left] + sorted[right];

			if (sum < 0) {
				left++;
			} else if (sum > 0) {
				right--;
			} else {
				result.push([sorted[i], sorted[left], sorted[right]]);

				while (left < right && sorted[left] === sorted[left + 1]) {
					left++;
				}

				while (left < right && sorted[right] === sorted[right - 1]) {
					right--;
				}
				left++;
				right--;
			}
		}
	}
	return result;
};

// test
let arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
