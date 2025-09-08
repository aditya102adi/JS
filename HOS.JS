function orderMeal(call_function) {
    console.log('Order  Placed');
    call_function();
}

function prepareMeal() {
    console.log('Meal Preparing');
}

orderMeal(prepareMeal);



//High order function
function x() {
    var a = 30;
    //iiner function
    return function y() {
        console.log(a);
    }
    //return y;
}

var res = x();
console.log(res);
//directly call res()
//Function are treated as object 
//res will have the function y object
//call the object 
res();


//===========================================
//CallBack Function
function greet(name) {
    console.log(`Hello, ${name}`);
}

//High Order Function
function processUser(name, callback) {
    callback(name);
}

processUser('Aditya', greet);

//===========================================
function createMultiplier(multiplier) {
    return function(number) { //Annonymous Function
        return number * multiplier;
    };
}

const double = createMultiplier(5);
console.log(double(2));