const array1 = [1, 2, 3, 4, 5, 6]
const array2 = [17, 8, 9, 43, 1];


// Brute Force solution O(a * b)
// const checkForMatches1 = (a, b) => {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }


// Improved time complexity to O(a + b)
const checkForMatches2 = (a, b) => {
    let hashTable = {};

    for (let i = 0; i < a.length; i++) {
        if (!hashTable[a[i]]) {
            const item = a[i];
            hashTable[item] = true;
        }
    }

    for (let j = 0; j < b.length; j++) {
        if (hashTable[b[j]]) {
            return true;
        }
    }
    return false;
}


console.log(checkForMatches3(array1, array2));