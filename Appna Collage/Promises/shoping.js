let stock = {
    products: ["Laptop", "Headphones", "Mobile"],
    payment: ["UPI", "Credit Card", "Debit Card"],
    delivery: ["Standard", "Express", "One-Day"],
};

let order = (productName, paymentMode, deliveryType, prepare_Order) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let productIndex = stock.products.indexOf(productName);
            if (productIndex === -1)  
                return reject('Invalid Product');
            console.log(`✔️ ${stock.products[productIndex]} selected`);
            resolve(productIndex);
        },2000);
    })
    .then((productIndex)=> {
        return new Promise((resolve,reject) => {
            setTimeout(()=> {
                let paymentIndex = stock.payment.indexOf(paymentMode);
                if (paymentIndex === -1) return reject("❌ Invalid Payment Method!");
                console.log(`💳 Payment mode selected: ${stock.payment[paymentIndex]}`);
                resolve({ productIndex, paymentIndex });
            },2000);
        })
    })
    .then(({ productIndex, paymentIndex }) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let deliveryIndex = stock.delivery.indexOf(deliveryType);
                if (deliveryIndex === -1) return reject('Invalid Delivery Option');
                console.log(`🚚 Delivery option chosen: ${stock.delivery[deliveryIndex]}`);
                resolve({ productIndex, paymentIndex, deliveryIndex });
            }, 2000);
        })
    })
    .then(({ productIndex, paymentIndex, deliveryIndex }) => {
        return prepare_Order(productIndex, paymentIndex, deliveryIndex);
    })
    .catch((err) => console.log(err.message));
};

function prepare_Order(productIndex, paymentIndex, deliveryIndex) {
    console.log("📦 Order processing started...");
    return new Promise((resolve) => {
        console.log(`✔️ ${stock.products[productIndex]} confirmed`);
        setTimeout(()=>{
            console.log("📦 Product is being packed");
            resolve();
        },1000);
    })

    .then(() => {
        return new Promise((resolve,reject) => {
            setTimeout(() =>{
                console.log(`💳 Payment processed with ${stock.payment[paymentIndex]}`);
                resolve();
            },2000);
        });
    })

    .then(() => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log(`🚚 ${stock.delivery[deliveryIndex]} delivery scheduled`);
                resolve();
            },1000);
        });
    })

    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("🎉 Order Delivered! Enjoy your product 😃");
            },2000);
        });
    })
}

// ✅ Place order
order("Mobile", "UPI", "Express", prepare_Order);

