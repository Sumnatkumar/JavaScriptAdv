function reverseDigits(num) {
    let reversed = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        num = Math.floor(num / 10);
    }


    return reversed;
}

const number = 12345;
console.log(`The reverse of the number is:${reverseDigits(number)}`);