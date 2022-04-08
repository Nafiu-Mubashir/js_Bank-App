let checkUser = JSON.parse(localStorage.getItem("currentUsers"))
console.log(checkUser)
if (checkUser == null) {
    location.href = "signIn.html"
}
else {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    btn.onclick = function () {
        sidebar.classList.toggle('active')
    }
    function logOut() {
        localStorage.removeItem('currentUser');
        location.href = "signIn.html"
    }

    let myChecker = JSON.parse(localStorage.getItem("bankCustomers"))
    let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
    fn.value = myLocalStorage.firstname;
    ln.value = myLocalStorage.lastname;
    pn.value = myLocalStorage.phoneNo;
    gd.value = myLocalStorage.genders;
    em.value = myLocalStorage.emails;

    function edit() {
        // let findPass = myChecker.find(val => val.passwords == ps.value);
        // if (ps.value == findPass) {
        //     errors = "Password not correct";
        //     return
        // }
        for (let i = 0; i < myChecker.length; i++) {
            if (myChecker[i].emails == em.value) {
                myChecker[i].firstname = fn.value;
                myChecker[i].lastname = ln.value;
                myChecker[i].phoneNo = pn.value;
                myChecker[i].genders = gd.value;
                myChecker[i].emails = em.value;
                myChecker[i].passwords = pss.value;
                console.log(myChecker[i].passwords);
            }

        }
    }
    function update() {
        // let findMail = myChecker.find(val => val.emails == em.value);
        // if (findMail) {
        //     findMail.firstname = fn.value;
        //     findMail.lastname = ln.value;
        //     findMail.phoneNo = pn.value;
        //     findMail.genders = gd.value;
        //     findMail.emails = em.value;
        //     findMail.passwords = pss.value;
        //     console.log(findMail);
        //     localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        //     localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        //     location.reload("profile.html");
        // }
        // else{
        //     alert("Old password is not correct");
        // }
    }
}