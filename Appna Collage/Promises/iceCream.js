let stock = {
    flavours: ["Strwaberry", "Chocolate", "ButterStoch"],
    conesSize: ["L", "M", "S"],
    toppings: ["ChocChips", "TrootiFruti"],
};


let order = (flavour, coneSize, topping) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flavourIndex = stock.flavours.indexOf(flavour);
            if (flavourIndex === -1) return reject("Invalid Flavour");
            console.log(`${stock.flavours[flavourIndex]} is selected`);
            resolve(flavourIndex);
        }, 1500);
    })
    .then((flavourIndex) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let coneIndex = stock.conesSize.indexOf(coneSize);
                if (coneIndex === -1) return reject("Invalid Cone Size");
                console.log(`Cone Size: ${stock.conesSize[coneIndex]} selected`);
                resolve({ flavourIndex, coneIndex });
            }, 2000);
        });
    })
    .then(({ flavourIndex, coneIndex }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let toppingIndex = stock.toppings.indexOf(topping);
                if (toppingIndex === -1) return reject("Invalid Topping");
                console.log(`Topping: ${stock.toppings[toppingIndex]} added`);
                resolve({ flavourIndex, coneIndex, toppingIndex });
            }, 2000);
        });
    })
    .then((result) => {
        return prepare_Order(result);
    })
    .catch((err) => console.error("Order failed:", err));
};

function prepare_Order({ flavourIndex, coneIndex, toppingIndex }) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(
                `✅ Order Prepared: ${stock.flavours[flavourIndex]} with ${stock.conesSize[coneIndex]} cone and ${stock.toppings[toppingIndex]} topping.`
            );
            resolve();
        }, 1500);
    });
}

// Call order
order("Chocolate", "M", "ChocChips");
