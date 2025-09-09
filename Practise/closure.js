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