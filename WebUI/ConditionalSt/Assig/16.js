function isMultipleOf3(n) {
    return (n % 3 === 0) ? `${n} is a multiple of 3` : `${n} is not a multiple of 3`;
}

const num = 27;
console.log(isMultipleOf3(num));