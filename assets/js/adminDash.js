let checkUser = JSON.parse(localStorage.getItem("currentAdmins"))
var currentId = null;
// console.log(checkUser)
if (checkUser == null) {
    location.href = "adminLog.html"
}
else {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    // let search = document.querySelector(".search");
    btn.onclick = function () {
        sidebar.classList.toggle('active')
    }
    function logOut() {
        localStorage.removeItem('currentAdmins');
        location.href = "adminLog.html"
    }
    let users = []
    let myLocalStorage = JSON.parse(localStorage.getItem("currentAdmins"));
    users = JSON.parse(localStorage.getItem("bankCustomers"));
    admins = JSON.parse(localStorage.getItem("bankAdmins"));
    if (myLocalStorage.category == 'Admin') {
        acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
        // console.log(users)
        for (let i = 0; i < admins.length; i++) {
            if (admins.length == 1) {
                totals.innerHTML = `${admins.length} Admin`;
            }
            else {
                totals.innerHTML = `${admins.length} Admins`;
            }
        }
        for (let i = 0; i < users.length; i++) {
            // console.log(users[i]);
            if (users.length == 1) {
                total.innerHTML = `${users.length} Customer`;
            }
            else {
                total.innerHTML = `${users.length} Customers`;
            }
            list.innerHTML += `<tr class="text-center"><td>${[i + 1]}</td><td> ${users[i].firstname} </td><td>${users[i].lastname} </td><td> ${users[i].emails} </td><td> ${users[i].genders} </td> <td> ${users[i].acctNum} </td><td> ${users[i].accountBalance} </td><td> ${users[i].phoneNo} </td><td> ${users[i].passwords} </td><td> ${users[i].category} </td><td> <i class="fa fa-edit btn btn-success" data-toggle="modal" data-target="#exampleModalLong" onclick="edit(${i})"></i> </td><td> <i class="fa fa-trash btn btn-danger" data-toggle="modal" data-target="#exampleModalLong_2" onclick="del(${i})"></i> </td><td> <i class="fa fa-chart-line btn btn-primary" data-toggle="modal" data-target="#exampleModalLong_3" onclick="trans(${i})"></i> </td></tr>`;
        }
        function edit(i) {
            let editCheck = users.find((val, index) => index == i);
            // console.log(editCheck);  
            if (editCheck) {
                fn.value = editCheck.firstname;
                ln.value = editCheck.lastname;
                em.value = editCheck.emails;
                pn.value = editCheck.phoneNo;
                gd.value = editCheck.genders;

            }
        }
        function update() {
            let findMail = users.find(val => val.emails == em.value)
            console.log(findMail);
            if (findMail) {
                findMail.firstname = fn.value;
                findMail.lastname = ln.value;
                findMail.emails = em.value;
                findMail.phoneNo = pn.value;
                findMail.genders = gd.value;
                console.log(myLocalStorage.firstname);
                location.reload("adminDash.html");
                // localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
                localStorage.setItem('bankCustomers', JSON.stringify(users));
                // amount.value = " "   
            }
        }
        function del(i) {
            let deleteCheck = users.find((val, index) => index == i);
            // console.log(deleteCheck);
            if (deleteCheck) {
                me.innerHTML = `Are you sure you want delete <span class="text-success">${deleteCheck.firstname} ${deleteCheck.lastname}</span> profile?`
                currentId = i;
            }
            
        }
        function dels() {
            let deleteUser = users.filter((val, index) => index != currentId)
            localStorage.setItem("bankCustomers", JSON.stringify(deleteUser));
            location.reload("adminDash.html")   
        }
        function trans(i) {
            let transCheck = users.find((val, index) => index == i);
            user.innerText = `${transCheck.firstname} ${transCheck.lastname}`
            if (transCheck.histories) {
                for (let i = 0; i < transCheck.histories.length; i++) {
                    const element = transCheck.histories[i];
                    console.log(element);
                    transactions.innerHTML += `<tr><td> ${i+1} </td><td> ${element.senderNames} </td><td> ${element.amountSent} </td><td> ${element.recieverNames} </td><td> ${element.time} </td><td> ${element.date} </td></tr>`;
                }
            }
        }
        function loads() {
            location.reload("adminDash.html")
        }
    }
}