try {
    abc();
} catch (ex) {
    console.log(ex.messsage);
} finally {
    console.log(`Executation completed.`);
}

//Custom execption 
//Throw will have catch
function validate(age) {
    try {
        if (age < 18) {
            throw new Error("Under Age");
        } else {
            console.log('Age is valid');
        }
    } catch (ex) {
        console.log(`Exception is : ${ex.message}`);
    }
}

validate(22);
validate(5);