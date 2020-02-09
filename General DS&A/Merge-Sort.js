const mergeSort = (arrayToSort) => {

    // If array less than 2 items, array is already sorted
    if (arrayToSort.length < 2) {
        return arrayToSort;
    }

    // Establish mid-point of array
    const midIndex = Math.floor(arrayToSort.length / 2);

    const left = arrayToSort.slice(0, midIndex);
    const right = arrayToSort.slice(midIndex);

    // Sorts each half
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Merge sorted halves
    const sortedArray = [];
    let currentLeftIndex = 0;
    let currentRightIndex = 0;

    while (sortedArray.length < left.length + right.length) {

        // sortedLeft's first element comes first
        // if less than sortedRight's first
        // element or if sortedRight is exhausted
        if (currentLeftIndex < left.length &&
            (currentRightIndex === right.length) ||
            sortedLeft[currentLeftIndex] < sortedRight[currentRightIndex]) {
            sortedArray.push(sortedLeft[currentLeftIndex]);
            currentLeftIndex += 1;
        } else {
            sortedArray.push(sortedRight[currentRightIndex]);
            currentRightIndex += 1;
        }
    }

    return sortedArray;
}


// Test
const numGenerator = (numAmount) => {
    const newArr = []
    for (let i = 0; i < numAmount; i++) {
        newArr.push(Math.floor(Math.random() * 23))
    }
    return newArr;
}

console.log(mergeSort(numGenerator(20)));