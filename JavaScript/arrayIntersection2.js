const intersection = (arr1, arr2) => {
	const hash = {};

	arr1.forEach(function (num) {
		if (!hash[num]) {
			hash[num] = 1;
		} else {
			hash[num]++;
		}
	});

	const result = [];
	arr2.forEach(function (num) {
		if (hash[num] && hash[num] > 0) {
			result.push(num);
			hash[num]--;
		}
	});

	return result;
};

// test
let array1 = [1, 2, 2, 1];
let array2 = [2, 2];

console.log(intersection(array1, array2));
