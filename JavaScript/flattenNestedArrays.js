const flatten = (arr) => {
	return arr.reduce((accum, item) => {
		return accum.concat(Array.isArray(item) ? flatten(item) : item);
	}, []);
};

// test
const test = [1, 2, [3, 4, [5, 6], 7], [8, 9], 10];
console.log(flatten(test));
