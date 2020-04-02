const happyNums = (n, counter = 0) => {
	let result = false;

	if (counter < 8) {
		let arr = n
			.toString()
			.split('')
			.map(number => number * number);

		let sum = arr.reduce((accum, value) => {
			return accum + value;
		}, 0);

		if (sum === 1) {
			result = true;
		} else {
			counter++;
			return happyNums(sum, counter);
		}
	}

	return result;
};

// Tests
console.log('Should be true', happyNums(19));
console.log('Should be false', happyNums(20));
