addNums = require('../add');

test('Add', () => {
	expect(addNums(2, 2)).toStrictEqual(4);
});
