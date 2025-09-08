//Given an array of numbers, create a new array 
// where each number is squared.
//Example: [2, 3, 4] → [4, 9, 16]
const num1 = [2, 3, 4];
const square = num1.map((a) => a*a);
console.log(square);

//From an array of strings, return a new array 
// containing only the strings that start with the letter "a".
//Example: ["apple", "banana", "avocado", "cherry"] → ["apple", "avocado"]
const fruit = ["apple", "banana", "avocado", "cherry"];
const fruitA = fruit.filter((word) => word.charAt(0) === 'a');
console.log(fruitA);


//Take an array of numbers and return only the positive ones.
//Example: [-5, 3, -2, 10, 0] → [3, 10]
const num2 = [-5, 3, -2, 10, 0];
const positive = num2.filter((num) => num > 0);
console.log(positive);

//Create a new array that contains the length of each string in a given array.
//Example: ["cat", "elephant", "dog"] → [3, 8, 3]
const animal = ["cat", "elephant", "dog"];
const len = animal.map((s1) => s1.length);
console.log(len);


//Check if all numbers in an array are even.
//Example: [2, 4, 6, 8] → true
const arr = [2, 4, 6, 8];
const allEven = arr.every(num => num % 2 === 0);
console.log(allEven); // true


//Check if at least one element in the array is negative.
//Example: [4, -2, 7] → true
const arr2 = [4, -2, 7];
const hasNegative = arr2.some(num => num < 0);
console.log(hasNegative); // true




//Print each element of an array with its index.
//Example: ["a", "b", "c"] → "Index 0: a", "Index 1: b", ...

let arr3 = ["a", "b", "c"];
arr3.forEach(char =>
    console.log(`Index of ${char}: ${arr3.indexOf(char)}`)
);

arr3.forEach((char, index) => 
    console.log(`${char}: ${index}`)
);

//Return a new array with all numbers multiplied by their index.
//Example: [5, 10, 15] → [0, 10, 30]

let arr4 = [5, 10, 15];
const res = arr4.map((num,index) => num*index);
console.log(res);

//Find the sum of all elements in an array of numbers.
const arr5 = [5, 10, 15];
const res1 = arr5.reduce((acc,cur) => acc + cur, 0);
console.log(res1);

//Find the largest number in an array.
const arr6 = [1, 7, 3, 9, 5];
const max = arr6.reduce((acc,curr) => acc > curr ? acc : curr, arr6[0]);
console.log(max);


//Convert names into initials
const names = ["John Doe", "Jane Smith"];
const initials = names.map((name) => {
    return name.split(" ")
});