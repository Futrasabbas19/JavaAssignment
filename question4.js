function arrays() {
    let input = [5, 14, 12, 72, 1, 9, 58, 3];
    for (j = 0; j < input.length - 1; j++) {
        for (i = 0; i < input.length - 1; i++) {
            if (input[i] < input[i + 1]) {
                final = input[i];
                input[i] = input[i + 1];
                input[i + 1] = final;
            }
        }
    }
    return input[1];
}

console.log(arrays());