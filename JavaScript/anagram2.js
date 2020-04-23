const anagram = (str1, str2) => {
	let first = str1.split('').sort().join('');
	let second = str2.split('').sort().join('');

	return first === second ? true : false;
};

// test
let one = 'racecar';
let two = 'rcaecra';

console.log(anagram(one, two));
