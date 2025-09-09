//Write a function that takes an array of numbers and a callback, 
//then applies the callback to each number and prints the result.

function squareNumber(num) {
    console.log(num * num);
}
function processNumbers(arr, callback) {
    arr.forEach(callback);
}
const numbers = [1, 2, 3];
processNumbers(numbers, squareNumber);



function greet(name) {
    console.log(`Hello, ${name}`);
}
function processUser(arr,callback) {
    arr.forEach(callback);
}
const names = ["Aditya", "Riya", "Karan", "Ravi"];
processUser(names,greet);


function check(num) {
    if(num % 2 == 0)
        console.log(`${num} is even`);
    else
        console.log(`${num} is odd`);
}

function processNumbers(numbers, callback) {
    numbers.forEach(callback);
}

const numbers_1 = [1,2,3,4,5,6,7,8];
processNumbers(numbers_1, check);

