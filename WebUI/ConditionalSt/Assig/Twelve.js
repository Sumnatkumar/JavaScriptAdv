// function printInAscOrder(a, b, c) {
//     const nums = [a, b, c];
//     nums.sort((x, y) => x - y);
//     console.log(nums.join(','));
// }
// printInAscOrder(45, 12, 78);


function printInAscendingOrder(a, b, c) {
    let x, y, z;

    if (a <= b && a <= c) {
        x = a;
        if (b <= c) {
            y = b;
            z = c;
        } else {
            y = c;
            z = b;
        }
    } else if (b <= a && b <= c) {
        x = b;
        if (a <= c) {
            y = a;
            z = c;
        } else {
            y = c;
            z = a;
        }
    } else {
        x = c;
        if (a <= b) {
            y = a;
            z = b;
        } else {
            y = b;
            z = a;
        }
    }

    console.log(`${x}, ${y}, ${z}`);
}

printInAscendingOrder(45, 12, 78);