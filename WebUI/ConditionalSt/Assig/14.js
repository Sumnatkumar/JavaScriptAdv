// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
// }

// const a = 45,
//     b = 12,
//     c = 78;
// console.log(`The largest number is:${findLargest(a, b, c)}`);

// function findLargest(a, b, c) {
//     let largest;

//     if (a >= b && a >= c) {
//         largest = a;
//     } else if (b >= a && b >= c) {
//         largest = b;
//     } else {
//         largest = c;
//     }
//     return largest;
// }

// const a = 45,
//     b = 12,
//     c = 78;
// console.log(`The largest number is:${findLargest(a, b, c)}`)

function findLargest(a, b, c) {
    return (a >= b && a >= c) ? a : (b >= a && b >= c) ? b : c;
}

const a = 45,
    b = 12,
    c = 78

console.log(`The largest number is:${findLargest(a, b, c)}`)