let input = [];
let range = parseInt(window.prompt("How many elements you want to sort?"));
for (i = 0; i < range; i++) {
    userInput = parseInt(window.prompt("Enter the number:"));
    input.push(userInput);
}

function array_sort() {
    for (j = 0; j < input.length - 1; j++) {
        for (i = 0; i < input.length - 1; i++) {
            if (input[i] > input[i + 1]) {
                final = input[i];
                input[i] = input[i + 1];
                input[i + 1] = final;
            }
        }
    }
    return input;
}

console.log(array_sort());