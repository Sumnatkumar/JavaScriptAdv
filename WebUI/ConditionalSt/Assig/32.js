function isArmstrongNumber(num) {
    let digits = num.toString().split(''); // Convert number to string and split into digits
    let numDigits = digits.length; // Get the number of digits
    let sum = 0;

    // Loop through each digit and calculate the sum of digits raised to the power of numDigits
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(parseInt(digits[i]), numDigits); // Raise each digit to the power of numDigits and add to sum
    }

    // Check if sum is equal to the original number
    if (sum === num) {
        return `${num} is an Armstrong number.`;
    } else {
        return `${num} is not an Armstrong number.`;
    }
}

const number = 153; // Replace with any number to check
console.log(isArmstrongNumber(number));