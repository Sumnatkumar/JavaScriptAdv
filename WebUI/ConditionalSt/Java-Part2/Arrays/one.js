let arr = [10, 20.5, "Rahul", true, {},
    [], null, 10
]

//indexing
let a = [10, 20, 30, 40]

//append new element to end of array
a.push(50)
console.log(a) //[10,20,30,40,50]


//add new element - begin of the array
a.unshift(5) //[5,10,20,30,40,50]
console.log(a)
    //remove -the last element from array
a.pop() //[5,10,20,30,40]
console.log(a)
    //remove the begining element from the array
a.shift()
console.log(a)