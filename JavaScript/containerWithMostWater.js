const maxWater = (nums) => {
	let maxArea = 0;
	let i = 0;
	let j = nums.length - 1;

	while (i < j) {
		let width = j - i;
		let height = Math.min(nums[i], nums[j]);
		let maxCapacity = width * height;

		maxArea = Math.max(maxArea, maxCapacity);

		nums[i] <= nums[j] ? i++ : j--;
	}

	return maxArea;
};

module.exports = maxWater;
