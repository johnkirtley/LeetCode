const isPalindrome = (s) => {
	// removes all non-characters/non-digits
	let newStr = s.replace(/[^\w\d]/g, '');

	// reverses altered string
	let reverse = newStr.split('').reverse().join('');

	// compares altered string to reversed string
	return newStr.toLowerCase() === reverse.toLowerCase() ? true : false;
};

// test
let string = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(string));
