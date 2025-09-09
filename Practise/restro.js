function waiter(orderMenu) {
    console.log('Welcome');
    console.log('Order please');

    orderMenu();
}

function pizza() {
    console.log("Pizza is Ready!!");
}

function pasta() {
    console.log("Pasta is Ready!!");
}

function coffee() {
    console.log("Coffee is Ready!!");
}

waiter(function() { 
    pizza();
    pasta();
});

