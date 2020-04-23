var groupAnagrams = function (strs) {
	let hash = {};

	for (let i = 0; i < strs.length; i++) {
		let sort = strs[i].split('').sort().join('');

		if (!hash[sort]) {
			hash[sort] = [strs[i]];
		} else {
			hash[sort].push(strs[i]);
		}
	}

	let keys = Object.values(hash);
	console.log(keys);
};

// test
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
groupAnagrams(strs);
