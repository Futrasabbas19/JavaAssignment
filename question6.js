let firstNumber = parseInt(window.prompt("Enter first number:"));
let secondNumber = parseInt(window.prompt("Enter second number:"));
function sum() {
    let thirdNumber = secondNumber - firstNumber + 1;
    result = (thirdNumber / 2) * (secondNumber + firstNumber);
    return result;
}
console.log(sum());