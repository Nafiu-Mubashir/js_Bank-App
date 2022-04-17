let checkUser = JSON.parse(localStorage.getItem("currentUsers"))
console.log(checkUser)
if (checkUser == null) {
    location.href = "signIn.html"
} else {
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

    function deposit() {
        let historyLog = {
            depositor: userAcctName.value,
            amountdeposit: amount.value,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }
        let acctCheck = myChecker.find((val) => val.acctNum == userAcctNo.value);
        if (acctCheck) {
            // console.log(acctCheck.acctNum)
            acctCheck.accountBalance = +acctCheck.accountBalance + +amount.value;
            myLocalStorage.accountBalance = +myLocalStorage.accountBalance + +amount.value;
            if (!confirm("Are you sure you want to proceed")) return;
        }
        acctCheck.histories.depositHistory = [...acctCheck.histories.depositHistory, historyLog];
        myLocalStorage.histories.depositHistory = [...myLocalStorage.histories.depositHistory, historyLog];
        localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        amount.value = " "
    }
}