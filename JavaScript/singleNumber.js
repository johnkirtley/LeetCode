const singleNum = (arr) => {
	let nums = {};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];

		if (!nums[current]) {
			nums[current] = 1;
		} else {
			nums[current] = nums[current] + 1;
		}
	}

	for (let num in nums) {
		if (nums[num] === 1) {
			return nums[num];
		}
	}

	return false;
};

// test
let nums = [2, 2, 1];
console.log(singleNum(nums));
