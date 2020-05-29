for (let i = 1; i <= 100; i++) {
	let output = '';

	if (i % 15 === 0) {
		output += 'Fizz Buzz';
	} else if (i % 3 === 0) {
		output += 'Fizz';
	} else if (i % 5 === 0) {
		output += 'Buzz';
	} else {
		output += i;
	}

	console.log(output);
}
