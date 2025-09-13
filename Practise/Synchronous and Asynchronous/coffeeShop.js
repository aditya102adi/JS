let stock = {
    coffee: ['Cold Coffee', 'Latte', 'Espresso'],
    sugar: ['Borwn', 'White'],
    size: ['L', 'M', 'S'],
};

let Order = (coffeeName, call_prepare, size) => {
    setTimeout(() => {
        console.log(`${stock.coffee[coffeeName]} was selected`);
        call_prepare(size);
    }, 2000);
    console.log(`Order placed`);
}


//Events loops - 
// Nested callback is also called as -> call back queue
let prepare = (size) => {
    setTimeout(() => {
        console.log("Preparation started");

        setTimeout(() => {
            console.log("Add milk and coffee powder");

            setTimeout(() => {
                console.log(`${stock.sugar[1]} was selected, add it`);

                setTimeout(() => {
                    console.log("Then boil and filter");

                    setTimeout(() => {
                        console.log(`${stock.size[size]} was selected, add it`);

                        setTimeout(() => {
                            console.log("☕ Coffee Served");
                        }, 2000);

                    }, 2000);

                }, 2000);

            }, 2000);

        }, 3000);

    }, 0);
};

Order(1, prepare,1);


/*Stock: products, payment methods, delivery options.

Steps:

Choose product.

Add to cart.

Make payment.

Pack item.

Dispatch.

Deliver.*/