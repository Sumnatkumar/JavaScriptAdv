function isThreeDigitNumber(n) {
    return (n >= 100 && n <= 999) || (n <= -100 && n >= -999) ? `${n} is a 3-digit number` : `${n} is not 3-digit number`;
}

const num = 456;
console.log(isThreeDigitNumber(num))