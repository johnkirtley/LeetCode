const twoSum = (arr, target) => {
	let numObject = {};

	for (let i = 0; i < arr.length; i++) {
		let num = arr[i];
		numObject[num] = i;
	}

	for (let i = 0; i < arr.length; i++) {
		let difference = target - arr[i];

		if (numObject.hasOwnProperty(difference) && numObject[difference] !== i) {
			return [i, numObject[difference]];
		}
	}
};

// Test

let arr = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(arr, target));
