let arrayOfNumbers = [];
process.on("message", function (message) {
    for (let index = 0; index < message; index++) {
        arrayOfNumbers.push(parseInt(Math.random() * (1001 - 1) + 1))
    }
    process.send(arrayOfNumbers);
    process.exit();
});
