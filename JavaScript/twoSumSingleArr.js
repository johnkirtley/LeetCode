const twoSum = (arr, target) => {
	let nums = {};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];

		if (!nums[current]) {
			nums[current] = i;
		}
	}

	for (let i = 0; i < arr.length; i++) {
		let difference = target - arr[i];

		if (nums.hasOwnProperty(difference) && nums[difference] !== i) {
			return [i, nums[difference]];
		}
	}
};

// Test

let arr = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(arr, target));
