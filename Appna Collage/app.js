// Callback
function sum(a,b) {
    console.log(a+b);
}

//HOF
function calculator(a, b, sumCallback) {
    sumCallback(a,b);
}

calculator(1,5,sum);

calculator(5,3, (a,b) => {
    console.log(a+b);
});