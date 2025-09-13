//data 1
//data 2
//data 3
// with delay of 2 in each

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log('Data ', dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

//Using Callbacks
//Call back hell
getData(1, () => {
    getData(2,() => {
        getData(3, () => {
            getData(4);
        });
    });
});