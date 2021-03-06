const threeSum = require('../3sum');
const productOfArr = require('../productOfArrExceptSelf');
const longestSubString = require('../longestSubString');
const maxWater = require('../containerWithMostWater');

test('3 Sum Problem', () => {
	expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
		[-1, -1, 2],
		[-1, 0, 1],
	]);
});

test('Product of Array Except Self', () => {
	expect(productOfArr([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
});

test('Longest SubString', () => {
	expect(longestSubString('abcabcbb')).toStrictEqual(3);
});

test('Find Container That Holds Max Water', () => {
	expect(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toStrictEqual(49);
});
