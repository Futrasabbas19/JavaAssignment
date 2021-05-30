function factorial() {
    let firstNumber = 1;
    for (i = 1; i <= input; i++) {
        firstNumber *= i;
    }
    return firstNumber;
}

let input = window.prompt("Enter the number:");
console.log(factorial());