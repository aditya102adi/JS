let stock = {
    flavours: ["Strwaberry", "Choclate", "ButterStoch"],
    conesSize: ["L", "M", "S"],
    toppings: ["ChocChips", "TrootiFruti"],
};

let Order = (flavourName, conesSize, toppings, prepare_Icecream) => {
    setTimeout(() => {
        console.log(`${stock.flavours[flavourName]} is selected`);
        setTimeout(() => {
            console.log(`${stock.toppings[toppings]} is selected`);
            setTimeout(() => {
                console.log(`${stock.conesSize[conesSize]} is selected`);
                setTimeout(() => {
                    console.log('Order Placed !!');
                    prepare_Icecream(flavourName, toppings);
                },1000);
            }, 1000);
        }, 2000);
    }, 1000);
}

function prepare(flavorName, addToppings) {
    setTimeout(() => {
        console.log('Preparation Started');
        setTimeout(() => {
            console.log(`${stock.flavours[flavorName]} is added.`);
            setTimeout(() => {
                console.log(`Preparing Cone`);
                setTimeout(() => {
                    console.log(`${stock.toppings[addToppings]} is added.`);
                    setTimeout(() => {
                        console.log('Kept for freeze');
                        setTimeout(() => {
                            console.log('Ice Creame is Served !! Enjoy');
                        }, 2000);
                    }, 3000);
                }, 3000);
            }, 2000);
        }, 2000);
    }, 1000);
}

Order(1, 1, 1, prepare);
