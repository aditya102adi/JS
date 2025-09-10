function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log(count);
    }
}

const fun = outerFunction();
fun();
fun();


function outer() {
    let count = 0; // variable in outer scope

    function inner() {
        count++; // inner function accessing outer variable
        console.log(count);
    }

    return inner; // return the inner function
}

const counter = outer(); // outer() runs, returns inner()
counter(); // 1
counter(); // 2
counter(); // 3
