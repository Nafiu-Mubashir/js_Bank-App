let checkUser = JSON.parse(localStorage.getItem("currentUsers"));
// console.log(checkUser)
if (checkUser == null) {
    location.href = "signIn.html";
} else {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    btn.onclick = function () {
        sidebar.classList.toggle("active");
    };

    function logOut() {
        localStorage.removeItem("currentUsers");
        location.href = "signIn.html";
    }
    let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
    let myChecker = JSON.parse(localStorage.getItem("bankCustomers"));
    acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    userAcctName.value = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    userAcctNo.value = `${myLocalStorage.acctNum}`;

    function withdraw() {
        let historyLog = {
            withdrawalNames: userAcctName.value,
            amountWithdraw: amount.value,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
        };
        let acctCheck = myChecker.find((val) => val.acctNum == userAcctNo.value);
        if (amount.value > acctCheck.accountBalance) {
            alert("Insufficient fund");
            return;
        }
        if (amount.value == "") {
            alert("Please enter the amount you want to withdraw");
            return;
        }
        if (acctCheck) {
            // console.log(acctCheck.acctNum);
            acctCheck.accountBalance = +acctCheck.accountBalance - +amount.value;
            // console.log(acctCheck.accountBalance);
            myLocalStorage.accountBalance = +myLocalStorage.accountBalance - +amount.value;
            if (!confirm("Are you sure you want to proceed")) return;
            alert(`Your withdraw from your account is successful. \n Thanks for banking with us.`);
        }
        acctCheck.histories.withdrawHistory = [...acctCheck.histories.withdrawHistory,historyLog,];
        myLocalStorage.histories.withdrawHistory = [...myLocalStorage.histories.withdrawHistory,historyLog,];
        localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        amount.value = " ";
    }
}