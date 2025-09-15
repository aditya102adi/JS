let promise = new Promise((resolve, reject) => {
    console.log('I am a promise');
    resolve(123);
});
console.log(promise);

// Book BMS - 2S
// SELECT THE MOVIE - 3S
// SELECT SEAT - 5S
// BOOK TICKET - 1S

let p = new Promise((resolve, reject) => {
    let app = 'BMS';
    if (app === 'BMS') {
        resolve();
    } else {
        reject(new Error('BMS Not Found'));
    }
})

p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Open BMS');
            resolve();
        }, 2000);
    });
})
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Select the movie');
                resolve();
            }, 3000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Book Seat');
                resolve();
            }, 2000);
        })
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Book Ticket');
                resolve();
            }, 1000);
        })
    })
    .catch((error) => {
        console.log(error.message);
    });