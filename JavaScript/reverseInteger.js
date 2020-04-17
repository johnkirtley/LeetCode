const reverseInteger = (arr) => {
	let value = Number(Math.abs(arr).toString().split('').reverse().join(''));

	if (value > Math.pow(2, 31) - 1) {
		return 0;
	}

	return arr < 0 ? -value : value;
};

// test
let test1 = [123];
let test2 = [-123];

console.log(reverseInteger(test1));
