function isDivisibleBy7(n) {
    return (n % 7 === 0) ? `${n} is divisible by 7 ` : `${n} is not divisible by 7`;
}

const num = 49;
console.log(isDivisibleBy7(num))