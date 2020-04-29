const isPalindrome = (num) => {
	let reverse = Number(num.tostring().split('').reverse().join(''));

	return reverse === num ? true : false;
};
