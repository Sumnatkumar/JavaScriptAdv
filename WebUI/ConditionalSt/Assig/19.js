function EvenOdd(n) {
    return (n % 2 == 0) ? `${n} is a even number` : `${n} is not even number`;
}

const num = 13;
console.log(EvenOdd(num));