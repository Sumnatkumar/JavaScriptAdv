let enames = ["Rahul", "Sonia", "Priyanka", "Modi"]

//create new array with upper case letters- based on exist:

let new_enames = enames.map((enames) => {
    return enames.toLocaleUpperCase()
})

console.log(new_enames)