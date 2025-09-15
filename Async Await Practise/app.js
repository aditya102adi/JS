function wait(ms) {
    return new Promise((resolve) =>{
        setTimeout(resolve,ms);
    });
}

async function BookTicket() {
    // await make the JavaCode until my promise is resolved
    await wait(2000);
    console.log('OPEN BMS');

    await wait(3000);
    console.log('Select the movie');

    await new Promise((resolve)=> {
        setTimeout(resolve,5000);
    });
    console.log('Select Seat');

    await new Promise((resolve) => {
        setTimeout(resolve,1000);
    });
    console.log('Ticket Booked');
}

BookTicket();