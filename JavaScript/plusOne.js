const plusOne = (digits) => {
	let newNumber = [];

	while (digits.length) {
		let num = digits.pop();

		if (num === 9) {
			carry = 1;
			newNumber.push(0);
		} else {
			carry = 0;
			num = num + 1;
			newNumber.push(num);
			break;
		}
	}

	if (carry) {
		newNumber.push(1);
	}

	digits.push(...newNumber.reverse());
	return digits;
};

// test
let array = [1, 2, 9];
console.log(plusOne(array));
