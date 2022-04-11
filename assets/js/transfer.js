let checkUser = JSON.parse(localStorage.getItem("currentUsers"))
// console.log(checkUser)
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
    let myChecker = JSON.parse(localStorage.getItem("bankCustomers"));
    acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    userAcctName.value = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    userAcctNo.value = `${myLocalStorage.acctNum}`
    function showNo(e) {
        let acctNumber = e.target.value;
        // console.log(acctNumber);
        let acctFinder = myChecker.find(val => val.acctNum == acctNumber)
        if (acctFinder) {
            recieverName.value = `${acctFinder.firstname} ${acctFinder.lastname}`
            // console.log(recieverName.value);
        }
    }
    function transfer() {
        let historyLog = {
            recieverNames: recieverName.value,
            senderNames: userAcctName.value,
            amountSent: amount.value,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        }
        if (recieverAcct.value == userAcctNo.value) {
            alert("Sorry you can't send money to yourself");
            return;
        }
        if (recieverName.value == "") {
            errors.innerText = "Account does not exist";
            location.reload("transfer.html");
            return;
        }
        if (amount.value > myLocalStorage.accountBalance) {
            alert("Hi");
            return;
        }
        for (let i = 0; i < myChecker.length; i++) {
            if (myChecker[i].acctNum == recieverAcct.value) {
                myChecker[i].accountBalance = +myChecker[i].accountBalance + +amount.value;
                myLocalStorage.accountBalance = +myLocalStorage.accountBalance + +amount.value;
                myChecker[i].histories = [...myChecker[i].histories, historyLog]
            }
            if (myChecker[i].acctNum == myLocalStorage.acctNum) {
                myChecker[i].accountBalance = +myChecker[i].accountBalance - +amount.value;
                myLocalStorage.accountBalance = +myLocalStorage.accountBalance - +amount.value;
                // console.log(myChecker[i].histories);
                myChecker[i].histories = [...myChecker[i].histories, historyLog]
                if (!confirm("Are you sure you want to proceed")) return;
                // console.log(myLocalStorage.accountBalance);
            }

        }
        localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        amount.value = " ";
        recieverAcct.value = " ";

        // +234-01-4480000 GTB
    }
}