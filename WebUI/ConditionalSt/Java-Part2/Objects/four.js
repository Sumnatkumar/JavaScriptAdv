let emp = {
    'id': 101,
    'name': 'Rahul',
    'sal': 450000,
    'sal': 55000
}

// console.log(Object.keys(emp)) //3
// console.log(Object.values(emp)) //3

Object.assign(emp, { 'loc': 'Wayanad' })

console.log(emp)