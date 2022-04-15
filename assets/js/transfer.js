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
            alert("Sorry!, you did not have sufficient balance for this transcation");
            return;
        }
        let senderCheck = myChecker.find((val) => val.acctNum == userAcctNo.value);
        let receiverCheck = myChecker.find((val) => val.acctNum == recieverAcct.value);
        if (receiverCheck) {
            receiverCheck.accountBalance = +receiverCheck.accountBalance + +amount.value;
            console.log(receiverCheck.accountBalance);
            console.log(myLocalStorage.accountBalance);
        }
        if (senderCheck) {
            receiverCheck.accountBalance = +receiverCheck.accountBalance - +amount.value;
            myLocalStorage.accountBalance = +myLocalStorage.accountBalance - +amount.value;
            console.log(receiverCheck.accountBalance);
            console.log(myLocalStorage.accountBalance);
            if (!confirm("Are you sure you want to proceed")) return;
        }

        receiverCheck.histories.transferHistory = [...receiverCheck.histories.transferHistory, historyLog]
        senderCheck.histories.transferHistory = [...senderCheck.histories.transferHistory, historyLog]
        console.log(receiverCheck.histories.transferHistory);
        myLocalStorage.histories.transferHistory = [...myLocalStorage.histories.transferHistory, historyLog]
        localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        amount.value = " ";

        // +234-01-4480000 GTB
    }
}