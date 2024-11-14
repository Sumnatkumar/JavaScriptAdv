let evenNumbers = [];
for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Enter number ${i}:`)); // Read the number from the user

    if (num % 2 === 0) { // Check if the number is even
        evenNumbers.push(num); // Add the even number to the array
    }
}

console.log("Even numbers entered: ", evenNumbers);