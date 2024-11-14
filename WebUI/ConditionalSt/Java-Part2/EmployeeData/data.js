let users = [{ "id": 1, "name": "Corrianne", "email": "cdolman0@dmoz.org", "gender": "Female" },
    { "id": 2, "name": "Victoir", "email": "vnormanville1@abc.net.au", "gender": "Male" },
    { "id": 3, "name": "Clemente", "email": "cpieter2@statcounter.com", "gender": "Male" },
    { "id": 4, "name": "Jocelyn", "email": "jbeton3@vistaprint.com", "gender": "Female" },
    { "id": 5, "name": "Selestina", "email": "sfasse4@tinypic.com", "gender": "Female" },
    { "id": 6, "name": "Fritz", "email": "fgerkens5@phpbb.com", "gender": "Male" },
    { "id": 7, "name": "Roy", "email": "rcookson6@vk.com", "gender": "Male" },
    { "id": 8, "name": "Annadiane", "email": "abrasher7@hc360.com", "gender": "Non-binary" },
    { "id": 9, "name": "Sydney", "email": "sdombrell8@dot.gov", "gender": "Female" },
    { "id": 10, "name": "Deanne", "email": "djagoe9@addthis.com", "gender": "Female" },
    { "id": 11, "name": "Heather", "email": "hbarnevillea@fastcompany.com", "gender": "Female" },
    { "id": 12, "name": "Nealy", "email": "nchatfieldb@economist.com", "gender": "Male" },
    { "id": 13, "name": "Juan", "email": "jwhimpc@wikispaces.com", "gender": "Male" },
    { "id": 14, "name": "Tory", "email": "tdaced@multiply.com", "gender": "Female" },
    { "id": 15, "name": "Sky", "email": "skuschkee@npr.org", "gender": "Male" },
    { "id": 16, "name": "Emmett", "email": "egrainef@linkedin.com", "gender": "Male" },
    { "id": 17, "name": "Arleen", "email": "akildahlg@edublogs.org", "gender": "Female" },
    { "id": 18, "name": "Josephina", "email": "jlumoxh@hhs.gov", "gender": "Bigender" },
    { "id": 19, "name": "Prue", "email": "pofahertyi@so-net.ne.jp", "gender": "Female" },
    { "id": 20, "name": "Manfred", "email": "mmarlerj@jugem.jp", "gender": "Male" },
    { "id": 21, "name": "Zea", "email": "zivelk@hatena.ne.jp", "gender": "Non-binary" },
    { "id": 22, "name": "Dusty", "email": "dbosnelll@cafepress.com", "gender": "Female" },
    { "id": 23, "name": "Leeland", "email": "lovernellm@scribd.com", "gender": "Male" },
    { "id": 24, "name": "Allison", "email": "ahebbornen@biblegateway.com", "gender": "Agender" },
    { "id": 25, "name": "Marcy", "email": "maceyo@usatoday.com", "gender": "Female" },
    { "id": 26, "name": "Gaspard", "email": "gdebrettp@yandex.ru", "gender": "Male" },
    { "id": 27, "name": "Carroll", "email": "cturbayneq@com.com", "gender": "Male" },
    { "id": 28, "name": "Mycah", "email": "mgimsonr@squidoo.com", "gender": "Male" },
    { "id": 29, "name": "Juana", "email": "jwiddicombes@instagram.com", "gender": "Female" },
    { "id": 30, "name": "Isidore", "email": "ibatchellort@blog.com", "gender": "Male" },
    { "id": 31, "name": "Ulrick", "email": "upitkinu@wisc.edu", "gender": "Male" },
    { "id": 32, "name": "Powell", "email": "prighyv@newsvine.com", "gender": "Male" },
    { "id": 33, "name": "Shelagh", "email": "scondliffew@harvard.edu", "gender": "Female" },
    { "id": 34, "name": "Valentin", "email": "vhanleyx@topsy.com", "gender": "Male" },
    { "id": 35, "name": "Haleigh", "email": "hbehry@fastcompany.com", "gender": "Male" },
    { "id": 36, "name": "Noland", "email": "ndaveleyz@phpbb.com", "gender": "Non-binary" },
    { "id": 37, "name": "Kain", "email": "kbrands10@pcworld.com", "gender": "Male" },
    { "id": 38, "name": "Meredith", "email": "mlett11@utexas.edu", "gender": "Male" },
    { "id": 39, "name": "Zach", "email": "zmaylor12@state.gov", "gender": "Male" },
    { "id": 40, "name": "Kalinda", "email": "kmewett13@blogs.com", "gender": "Genderqueer" },
    { "id": 41, "name": "Patten", "email": "pdrioli14@drupal.org", "gender": "Male" },
    { "id": 42, "name": "Webb", "email": "wmillion15@ezinearticles.com", "gender": "Male" },
    { "id": 43, "name": "Dee", "email": "djayume16@goo.ne.jp", "gender": "Female" },
    { "id": 44, "name": "Warren", "email": "wlowdwell17@sogou.com", "gender": "Male" },
    { "id": 45, "name": "Inna", "email": "icaldecott18@ft.com", "gender": "Female" },
    { "id": 46, "name": "Lucias", "email": "lschops19@photobucket.com", "gender": "Male" },
    { "id": 47, "name": "Emmerich", "email": "eratcliff1a@yahoo.co.jp", "gender": "Male" },
    { "id": 48, "name": "Nicola", "email": "njenton1b@admin.ch", "gender": "Female" },
    { "id": 49, "name": "Dion", "email": "dwillowby1c@theglobeandmail.com", "gender": "Female" },
    { "id": 50, "name": "Kiri", "email": "kworkes1d@statcounter.com", "gender": "Female" }
]


let display_Data = () => {
        let rows = ""
        for (user of users) {
            rows = rows + `
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.name}</td>
                <td>${user.gender}</td>
                </tr>`
        }
        document.getElementById('table_Data').innerHTML = rows
    }
    // function display_Data() {
    //     // alert('Test Case 123')
    //     let rows = ""
    //     for (user of users) {
    //         rows = rows + `
    //         <tr>
    //         <td>${user.id}</td>
    //         <td>${user.name}</td>
    //         <td>${user.name}</td>
    //         <td>${user.gender}</td>
    //         </tr>`
    //     }
    //     document.getElementById('table_Data').innerHTML = rows
    //         // document.getElementById('table_Data').innerHTML = "GM"
    // }