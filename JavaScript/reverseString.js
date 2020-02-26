const reverseStr = (str) => {
    const array = str.split('');

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        let temp = array[left];

        array[left] = array[right];
        array[right] = temp;

        left++;
        right--;
    }

    return array.toString().replace(/,/g, '');
}


// Test
let string = 'hello';
console.log(reverseStr(string));