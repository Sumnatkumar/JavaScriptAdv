function printFibonacciSeries(limit) {
    let a = 0,
        b = 1;

    console.log(a);
    console.log(b);

    let nextTerm = a + b;

    while (nextTerm <= limit) {
        console.log(nextTerm);
        a = b;
        b = nextTerm;
        nextTerm = a + b;
    }
}

const limit = 17;
printFibonacciSeries(limit);