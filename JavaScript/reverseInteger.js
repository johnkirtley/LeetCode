const reverseInteger = (arr) => {
	if (arr.length === 0) {
		return null;
	} else {
		return (
			Math.sign(arr) *
			Number(Math.abs(arr).toString().split('').reverse().join(''))
		);
	}
};

// test
let test1 = [123];
let test2 = [-123];

console.log(reverseInteger(test1));
