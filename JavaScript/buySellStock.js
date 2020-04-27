const maxProfit = (arr) => {
	let maxProfit = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			maxProfit += arr[i] - arr[i - 1];
		}
	}

	return maxProfit;
};

// test
const nums = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(nums));
