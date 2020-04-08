const firstUniqueChar = (s) => {
	let charCount = {};

	for (let i = 0; i < s.length; i++) {
		if (!charCount[s[i]]) {
			charCount[s[i]] = 1;
		} else {
			charCount[s[i]] = charCount[s[i]] += 1;
		}
	}

	for (let i = 0; i < s.length; i++) {
		if (charCount[s[i]] === 1) {
			return i;
		}
	}
	return -1;
};

// test
let string = 'leetcode';
console.log(firstUniqueChar(string));
