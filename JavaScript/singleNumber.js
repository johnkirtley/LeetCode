const singleNum = (arr) => {
	let hash = {};

	for (let i = 0; i < arr.length; i++) {
		let current = arr[i];

		if (!hash[current]) {
			hash[current] = 1;
		} else {
			hash[current] = hash[current] += 1;
		}
	}

	for (let num in hash) {
		if (hash[num] === 1) {
			return hash[num];
		}
	}
};

// test
let nums = [2, 2, 1];
console.log(singleNum(nums));
