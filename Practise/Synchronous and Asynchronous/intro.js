//Whenever we use setTimeOut function it becomes Synchronous function
console.log('Starts')
setTimeout(() => {
    console.log(`Open Book My Show`);
}, 3000);

setTimeout(() => {
    console.log(`Search Movie`);
}, 2000);

setTimeout(() => {
    console.log(`Select Seats`);
}, 5000);

setTimeout(() => {
    console.log(`Ticket Booked`);
}, 1000);

console.log('Ends');


//Makeing the Asyc to Sync
setTimeout(() => {
    console.log('Step 1');
    setTimeout(() => {
        console.log('Step 2');
        setTimeout(() =>{
            console.log('Step 3');
            setTimeout(() => {
                console.log('Step 4')
            }, 1000);
        },5000);
    },2000);
},3000);