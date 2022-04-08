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
        localStorage.removeItem('currentUsers');
        location.href = "signIn.html"
    }
    let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
    let myChecker = JSON.parse(localStorage.getItem("bankCustomers"))
    acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    userAcctName.value = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    userAcctNo.value = `${myLocalStorage.acctNum}`
    function withdraw() {
        for (let i = 0; i < myChecker.length; i++) {
            if (myChecker[i].acctNum == myLocalStorage.acctNum) {
                myChecker[i].accountBalance = +myChecker[i].accountBalance - +amount.value;
                myLocalStorage.accountBalance = +myLocalStorage.accountBalance - +amount.value;
                if (!confirm("Are you sure you want to proceed")) return;
                console.log(myLocalStorage.accountBalance);
            }
        }
        localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        amount.value = " "
        
    }
}
