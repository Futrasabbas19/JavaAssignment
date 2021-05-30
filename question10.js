let input = parseInt(window.prompt("Enter the number:"));
if (input === 1) {
    console.log(`The number ${input} is not a prime number.`);
} else if ((input % 2) === 0) {
    console.log(`The number ${input} is not a prime number.`);
} else {
    for (i = 2; i < input; i++) {
        if ((input % i) === 0) {
            console.log(`The number ${input} is not a prime number.`);
        }
    }
    console.log(`The number ${input} is a prime number.`);
}