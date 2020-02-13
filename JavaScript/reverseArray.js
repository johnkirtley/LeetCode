// Reverse Array of Characters In-Place


const reverse = (arr) => {

    // Establish beginning & end points
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    //Reverse Characters
    while (leftIndex < rightIndex) {
        // Store characters in variable so they do not get overwritten
        let temp = arr[leftIndex];

        // Swap characters
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;

        // Continue to move towards the middle of the array
        leftIndex++;
        rightIndex--;
    }
    return arr;
}


// Test
const array = ['a', 'b', 'c']
console.log(reverse(array));