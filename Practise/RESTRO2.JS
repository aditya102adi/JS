// For multiple orders
// Higher Order Function (Waiter)
function waiter(orderCallbacks) {
    console.log("Waiter: Welcome to the restaurant!");
    console.log("Waiter: Taking your order...");
    console.log(orderCallbacks);

    // Loop through multiple customer orders
    orderCallbacks.forEach(order => {
        order(); // Execute each callback (customer's order)
    });

    console.log("Waiter: All orders are being processed and served!");
}

// Callback functions (Customer orders)
function orderPizza() {
    console.log("Customer: I would like a Pizza, Pizza Ready!");
}

function orderPasta() {
    console.log("Customer: I would like a Pasta, Pasta Ready!");
}

function orderCoffee() {
    console.log("Customer: I would like a Coffee, Coffee Ready!");
}

// Place multiple orders
waiter([orderPizza, orderPasta, orderCoffee]);
