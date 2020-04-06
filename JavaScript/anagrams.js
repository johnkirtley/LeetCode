var groupAnagrams = function(strs) {
	let hash = {};

	for (let i = 0; i < strs.length; i++) {
		let sort = strs[i].split('').sort();

		if (!hash[sort]) {
			hash[sort] = [strs[i]];
		} else {
			hash[sort].push(strs[i]);
		}
	}

	console.log(Array.from(Object.values(hash)));
};

// test
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(strs);
