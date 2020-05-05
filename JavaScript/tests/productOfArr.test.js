const productOfArr = require('../productOfArrExceptSelf');

test('Product of Array Except Self', () => {
	expect(productOfArr([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
});
