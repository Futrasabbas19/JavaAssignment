let input = parseInt(window.prompt("Enter the number:"));
let number = 0;
for (i = 1; i < input + 1; i++) {
    if ((i % 2) === 0) {
    } else {
        number += i;
    }
}
console.log(number);