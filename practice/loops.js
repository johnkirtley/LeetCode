const array1 = ['john', 'jero', 'chris'];
const array2 = [];
const array3 = ['1', '2', '3', '4', '5'];

// Write A Function That Adds Two Numbers Together
// function addNum(x, y) {
//     return x + y;
// }

const addNum = (x, y) => x + y;

const firstPlusLast = (first, last) => {
    console.log(`My first name is: ${first} and my last name is: ${last}`);
};

firstPlusLast('John', 'K');

// Write a For Loop To Iterate Over Every Element In array1

// for (let i = 0; i < array1.length; i++) {
//     console.log(`${array1[i]}@gmail.com`);
// }

// for (let i = 0; i < array3.length; i++) {
//     console.log(`${array3[i]}`);
// }

// Write a For Loop To Multiply Every Element In array3 by 2

for (let i = 0; i < array3.length; i++) {
    const multiple = array3[i] * 2;
    console.log(`${array3[i]} multiplied by 2 is ${multiple}`);
}

// Write a For Loop To Square Every Element In array1
const newArr = [];
for (let i = 0; i < array3.length; i++) {
    newArr.push(array3[i] * 2);
    newArr.
}

console.log(newArr);

const intArray = array3.map((i) => {
    return Number(i);
});

console.log(intArray);

console.log('Max number is ', Math.max(intArray));

// Write a For Loop and Add Every Element To array2

// Reverse array1