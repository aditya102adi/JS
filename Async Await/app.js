async function BokkTicket() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Open BMS');

    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log('Select the Movie');

    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log('Select Seats');

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Ticket Booked');
}

BokkTicket();


/*===============================================*/
//Optimize the code

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function BokkTicket() {
    await wait(2000);
    console.log('Open BMS');

    await wait(3000);
    console.log('Select the Movie');

    await wait(5000);
    console.log('Select Seats');

    await wait(1000);
    console.log('Ticket Booked');
}

BokkTicket();

/*=====================================================*/

// Resolve and Reject 
function wait(ms, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("BMS Not Found ❌"));
            } else {
                resolve("Success ✅");
            }
        }, ms);
    });
}

async function BokkTicket() {
    try {
        await wait(2000); // ✅ success
        console.log('Open BMS');

        await wait(3000); // ✅ success
        console.log('Select the Movie');

        await wait(5000); // ✅ success
        console.log('Select Seats');

        await wait(1000); // ✅ success
        console.log('Ticket Booked');
    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        console.log('Close Phone');
    }
}

BokkTicket();


//Coffe Making