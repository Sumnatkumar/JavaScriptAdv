let Users = [{ "id": 1, "name": "Torr", "email": "srk@gmail.com" }]

// for (let i = 0; i <= Users.length - 1; i++) {
//     console.log(Users[i].id)
// }

for (user of Users) {
    console.log("User Id:" + user.id + user.name)
}