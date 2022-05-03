let checkUser = JSON.parse(localStorage.getItem("currentUsers"))
// console.log(checkUser)
if (checkUser == null) {
    location.href = "signIn.html"
} else {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    btn.onclick = function () {
        sidebar.classList.toggle('active')
    }

    function logOut() {
        localStorage.removeItem('currentUser');
        location.href = "signIn.html"
    }

    let myChecker = JSON.parse(localStorage.getItem("bankCustomers"));
    let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
    let findUser = myChecker.find(val => val.emails == myLocalStorage.emails)
    // console.log(myLocalStorage);
    fn.value = findUser.firstname;
    ln.value = findUser.lastname;
    pn.value = findUser.phoneNo;
    gd.value = findUser.genders;
    em.value = findUser.emails;
    ems.value = findUser.emails;

    update = () => {
        if (findUser) {
            findUser.firstname = fn.value;
            findUser.lastname = ln.value;
            findUser.phoneNo = pn.value;
        }
        localStorage.setItem("bankCustomers", JSON.stringify(myChecker))
        localStorage.setItem("currentUsers", JSON.stringify(myLocalStorage))
        console.log(myChecker);
        console.log(myLocalStorage);
    }
}