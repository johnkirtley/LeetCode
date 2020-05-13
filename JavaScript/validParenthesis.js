const isValid = (s) => {
	let stack = [];
	let hash = { '(': ')', '{': '}', '[': ']' };

	for (let i = 0; i < s.length; i++) {
		let current = s[i];

		if (hash[current] !== undefined) {
			stack.push(current);
		} else if (hash[stack.pop()] !== current) {
			return false;
		}
	}

	return stack.length ? false : true;
};
