const productOfArr = (nums) => {
	let temp = [];

	let product = 1;
	for (let i = 0; i < nums.length; i++) {
		temp[i] = product;
		product *= nums[i];
	}

	product = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		temp[i] *= product;
		product *= nums[i];
	}

	return temp;
};

module.exports = productOfArr;
