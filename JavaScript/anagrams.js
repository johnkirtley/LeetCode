const groupAnagrams = (strs) => {
	// create hash table/object to keep track of which strings are made up of which letters
	const groups = {};

	for (let i = 0; i < strs.length; i++) {
		// loop through strings and sort them alphabetically
		// notice how I don't join the string back together. This is because we want to check for individual letters.
		// this is how we'll tell if all the letters match or not
		let sort = strs[i].split('').sort().join('');

		// if sorted string doesn't exist, add it as a key to the hash table
		if (!groups[sort]) {
			// set the key's value to an array containing the current string
			// don't forget to wrap the key's value in brackets. We can't push new values in if the value isn't an array.
			groups[sort] = [strs[i]];
		} else {
			// if the sorted string already exists this means the current string contains all those letters.
			// push the current string into that key's array of values
			groups[sort].push(strs[i]);
		}
	}

	// use Object.values on the groups hash table to return all values as an array
	return Object.values(groups);
};
// test
const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
