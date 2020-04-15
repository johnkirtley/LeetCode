const intersection = (arr1, arr2) => {
	const result = arr1.filter((n) => {
		return arr2.indexOf(n) > -1;
	});

	return result;
};

// test

let array1 = [1, 2, 2, 1];
let array2 = [2, 2];

console.log(intersection(array1, array2));
