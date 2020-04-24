// Reverse Array of Characters In-Place

const reverse = (arr) => {
	// set left pointer to index 0
	let left = 0;

	// set right pointer to the last index
	let right = arr.length - 1;

	// while the left pointer is less than the right pointer
	// run the following block of code
	while (left < right) {
		// create a temporary variable to hold the left pointer value
		// we do this because this value is about to be overwritten
		let temp = arr[left];

		// set the left pointer value equal to the right pointer
		arr[left] = arr[right];

		// here is where we use the temporary variable
		// in the above line we just replaced the left pointer value with the right pointer value
		// we set the right pointer value equal to the temporary variable that is holding the original
		// left pointer value
		arr[right] = temp;

		// after the first round of swapping is done
		// increase the left pointer by one and decrease the right pointer by one
		// this moves both pointers towards the middle and swapping each value along the way
		left++;
		right--;
	}
	return arr;
};

// Test
const array = ['a', 'b', 'c'];
console.log(reverse(array));
