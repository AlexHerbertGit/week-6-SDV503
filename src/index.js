let firstName = "Alex"
let lastName = "Herbert"
const fullName = "Alex Herbert"

console.log(firstName)
console.log(lastName)
console.log(fullName)
// for loops testing
let ourArray = [];
    for (var i = 0; i < 5; i++) {
        ourArray.push(i);
    }
console.log(ourArray);
//Basic for loop

let arr = [10,9,8,7,6];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
// Array Iteration loop
// arr.length means the length of the array arr, if i is < the length of the array then add 1 to i until the length of the array is reached.
// (arr[i]) will display the index of the array until the loop is finished.

let array = [
    [1,2], [3,4], [5,6]
];
    for (let a=0; a < array.length; a++) {
        for (let j=0; j < array[a].length; j++) {
            console.log(array[a][j]);
    }
}
//Nested array and nested for loop.
//i will loop through the array and display the index of the array, j will loop through each nested array and display the index of each nested array.
