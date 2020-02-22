const mergeArrays = (arr1, arr2) => {

    // Concatenate arrays
    const merged = arr1.concat(arr2)

    // Sort arrays
    return merged.sort((a, b) => a - b)
}


// Test // Takes O(n) time
const test1 = [1, 2, 3, 45, 5, 6]
const test2 = [5, 7, 7, 7, 4, 2]
console.log(mergeArrays(test1, test2))