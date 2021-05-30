function checkingDivisibility (input) {
    if ((input % 3) === 0) {
        console.log("The number is divisible by 3");
    } else {
        console.log("The number is not divisible by 3");
    }
}

let input = prompt("Enter Your number: ");
checkingDivisibility (input);