for(let i=1; i<=10; i++) {
    console.log(i);
}

let i = 1;
while(i <= 5) {
    console.log(i);
    i++;
}


let n = [1,2,3,4,5];
n.forEach(nums => {
    console.log(nums*nums);
});

let i2 = 1;
while(true) {
    if(i2 == 3)
        break;
    console.log(i2);
    i2++;
}