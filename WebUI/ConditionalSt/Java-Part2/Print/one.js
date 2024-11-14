let emp = {
    'id': 101,
    'name': 'Rahul',
    'sal': 450000
}

let emp_Str = `{
    "id": 101,
    "name": "Rahul",
    "salary": 45000
}`

console.log(JSON.stringify(emp))
console.log(JSON.stringify(emp_Str))