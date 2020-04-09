const anagram = (str1, str2) => {
	let sort1 = str1.toString().split('').sort().join('');
	let sort2 = str2.toString().split('').sort().join('');

	return sort1 === sort2 ? true : false;
};

// test
let one = 'racecar';
let two = 'rcaecra';

console.log(anagram(one, two));
