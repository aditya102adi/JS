let stock = {
    products: ["Laptop", "Headphones", "Mobile"],
    payment: ["UPI", "Credit Card", "Debit Card"],
    delivery: ["Standard", "Express", "One-Day"],
};

let order = (productName, paymentMode, deliveryType, prepare_Order) => {
    // Step 1: Selecting product
    setTimeout(() => {
        let productIndex = stock.products.indexOf(productName);
        if (productIndex === -1) return console.log("❌ Invalid Product!");
        console.log(`✔️ ${stock.products[productIndex]} selected`);

        // Step 2: Payment
        setTimeout(() => {
            let paymentIndex = stock.payment.indexOf(paymentMode);
            if (paymentIndex === -1) return console.log("❌ Invalid Payment Method!");
            console.log(`💳 Payment mode selected: ${stock.payment[paymentIndex]}`);

            // Step 3: Delivery option
            setTimeout(() => {
                let deliveryIndex = stock.delivery.indexOf(deliveryType);
                if (deliveryIndex === -1) return console.log("❌ Invalid Delivery Option!");
                console.log(`🚚 Delivery option chosen: ${stock.delivery[deliveryIndex]}`);

                // Once all 3 are done → move to preparation
                prepare_Order(productIndex, paymentIndex, deliveryIndex);

            }, 2500); // choosing delivery
        }, 2000); // making payment
    }, 3000); // selecting product
};

function prepare_Order(productIndex, paymentIndex, deliveryIndex) {
    console.log("📦 Order processing started...");

    setTimeout(() => {
        console.log(`✔️ ${stock.products[productIndex]} confirmed`);
        setTimeout(() => {
            console.log("📦 Product is being packed");
            setTimeout(() => {
                console.log(`💳 Payment processed with ${stock.payment[paymentIndex]}`);
                setTimeout(() => {
                    console.log(`🚚 ${stock.delivery[deliveryIndex]} delivery scheduled`);
                    setTimeout(() => {
                        console.log("🎉 Order Delivered! Enjoy your product 😃");
                    }, 2000);
                }, 2500);
            }, 2000);
        }, 2000);
    }, 2000);
}

// ✅ Place order
order("Mobile", "UPI", "Myntra", prepare_Order);
