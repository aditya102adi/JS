// intialization array & assingning value
let arr = ["apple","banana","cherry"];
console.log(arr[0]); // displaying 0th index of array

// using new and Array contructor
let numbers = new Array(1,2,3,4,5);
console.log(numbers);

// push method in array
numbers.push(6);
console.log(numbers);

// unshift method in array
numbers.unshift(0);
console.log(numbers);

// pop method in array
numbers.pop();
console.log(numbers);

// shift method in array
numbers.shift();
console.log(numbers);

// accssing the array elements
console.log(numbers[4]);

// splice in array
console.log(numbers);
numbers.splice(1,2,10,10,10);
console.log(numbers);

//sorting array
let num = [3,4,5,1,2,0];
num.sort();
console.log(num.reverse());

//include method
console.log(num.includes(33));

//for loop
let l="";
for(let i=0;i<num.length;i++){
   l+=num[i] + " "; 
}
console.log(l);

//for each loop
let s = "";
num.forEach(f => {
    s+= f + " ";
});
console.log(s);

//square of number new array
let old_arr=[1,2,3];
let new_arr=[];
old_arr.forEach(f => {
    new_arr.push(f*f);
});vf
console.log(new_arr);

// new arr = old_arr
let arr1=[1,2,4];
let arr2 = arr1;
console.log(arr2);

//map function to create new array and storing values from old array
let arr3 = [1,2,3];
let arr_squared = arr3.map(n => n * n);
console.log(arr_squared);

// map for sum 
let arr4 = [1,2,3];
let sum1 = 0;
let sum_arr = arr4.map(m => sum1 +=m);
console.log(sum_arr);

// filter method from arrray functions
let arr_fil = [1,2,3,4,5,6,7,8,9,10];
let even_arr = arr_fil.filter(num => num%2 === 0);
console.log(even_arr);
console.log(arr_fil);

//reduce function in array
let arr_red = [1,2,3,4,5];
let res = arr_red.reduce((sum,num) => sum + num , 0);
console.log(res);

// multiply of using reduce
let arr_red1 = [1,2,3];
let res1 = arr_red1.reduce((sum,num) => sum * num , 1);
console.log(res1);

//concat array
let con_arr1 = [1,2];
let con_arr2 = [3,4];
let combined = con_arr1.concat(con_arr2);
console.log(combined);

//join method in array - only strings can be concatenate between array elements
let j1 = ["hello","world"];
let j2 = j1.join(" and ");
console.log(j2);

// take username from user
let a1 = prompt("enter value 1: ");
let b1 = prompt("enter value 2: ");
function sum11(a1,b1) {
    return a1+b1;
}