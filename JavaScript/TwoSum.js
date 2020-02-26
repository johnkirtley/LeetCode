// Search 2 arrays to see if target value can be reached

// O(a * b)
// const findSum = (a, b, target) => {
//     for (let i = 0; i < a.length; i++) {
//         let neededValue = target - a[i];
//         for (let j = 0; j < b.length; j++) {
//             if (neededValue === b[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// O(a + b)
const findSum = (a, b, target) => {
    const complements = {};

    for (let i = 0; i < a.length; i++) {
        complements[a[i]] = target - a[i];
    }

    for (let j = 0; j < b.length; j++) {
        if (complements[b[j]]) {
            return true && b[j]
        }
    }
    return false;
}



// Tests
const arr1 = [2, 4, 2, 6, 8, 34, 53]
const arr2 = [6, 54, 34, 67, 34]
const value = 36

console.log(findSum(arr1, arr2, value))