const minSteps = (a, b) => {
	const hash = {};
	let count = 0;

	for (let i = 0; i < a.length; i++) {
		let letter = a[i];
		if (!hash[letter]) {
			hash[letter] = 1;
		} else {
			hash[letter] = hash[letter] + 1;
		}
	}

	for (let i = 0; i < b.length; i++) {
		let letter = b[i];
		if (hash[letter]) {
			hash[letter]--;
		} else {
			count++;
		}
	}

	return count;
};

// test

const str1 = 'bab';
const str2 = 'aba';

console.log(minSteps(str1, str2));
