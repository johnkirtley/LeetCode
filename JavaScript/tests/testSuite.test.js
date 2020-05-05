const threeSum = require('../3sum');
const productOfArr = require('../productOfArrExceptSelf');

test('3 Sum Problem', () => {
	expect(threeSum([-1, 0, 1, 2, -1, -4])).toStrictEqual([
		[-1, -1, 2],
		[-1, 0, 1],
	]);
});

test('Product of Array Except Self', () => {
	expect(productOfArr([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
});
