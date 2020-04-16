const isPalindrome = (s) => {
	let newStr = s.replace(/[^\w\d]/g, '');
	let reverse = newStr.split('').reverse().join('');

	return newStr.toLowerCase() === reverse.toLowerCase() ? true : false;
};

// test
let string = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(string));
