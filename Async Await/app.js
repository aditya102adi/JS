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