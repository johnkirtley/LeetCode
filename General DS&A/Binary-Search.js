const binarySearch = (arr, target) => {

    // Setting Min and Max points
    let floor = -1;
    let ceiling = arr.length;

    // Search while floor is greater than ceiling
    while (floor + 1 < ceiling) {

        // Getting entire array distance
        const distance = ceiling - floor;

        // Calculating mid-point of array
        const halfDistance = Math.floor(distance / 2);

        // Setting initial guess to middle minus 1
        const guessIndex = floor + halfDistance;
        const guessValue = arr[guessIndex];

        if (guessValue === target) {
            return true;
        }

        // If target to the left of guessValue, eliminate right side of array
        if (guessValue > target) {

            // Set new max search length
            ceiling = guessIndex;
        } else {

            // If target to the right of guessValue, eliminate left side of array
            floor = guessIndex;
        }
    }

    // Return false if target not found in array
    return false;
}


// Test

const nums = Array.from(Array(25).keys())
console.log(binarySearch(nums, 24));