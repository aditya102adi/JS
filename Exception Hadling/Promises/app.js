p = new Promise((resolve, reject) => {
    let app = "BMS";
    if (app === "BMS") {
        resolve(); 
    } else {
        reject(new Error("BMS not found"));
    }
});

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Open BMS - 2s");
            resolve(); 
        }, 2000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select the Movie - 3s");
            resolve(); 
        }, 3000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Select Seat - 5s");
            resolve(); 
        }, 5000);
    });
})
.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ticket Booked - 1s");
            resolve(); 
        }, 1000);
    });
})
.catch((e) => {
    console.log("Error:", e.message);
});
