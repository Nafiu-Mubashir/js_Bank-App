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
    // userAcctName.value = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    // userAcctNo.value = `${myLocalStorage.acctNum}`

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
        let creditor = {
            reciever: `${myLocalStorage.firstname} ${myLocalStorage.lastname}`,
            amountSent: amount.value,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            transType: "Credit"
        }
        let debitor = {
            sender: recieverName.value,
            amountSent: amount.value,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
            transType: "Debit"
        }
        if (recieverAcct.value == myLocalStorage.acctNum) {
            alert("Sorry you can't send money to yourself");
            return;
        }
        if (recieverName.value == "") {
            alert("Account does not exist");
            return;
        }
        if (amount.value > myLocalStorage.accountBalance) {
            alert("Sorry!, you did not have sufficient balance for this transcation");
            return;
        }
        let senderCheck = myChecker.find((val) => val.acctNum == myLocalStorage.acctNum);
        let receiverCheck = myChecker.find((val) => val.acctNum == recieverAcct.value);
        if (receiverCheck) {
            receiverCheck.accountBalance = +receiverCheck.accountBalance + +amount.value;
        }
        if (senderCheck) {
            senderCheck.accountBalance = +senderCheck.accountBalance - +amount.value;
            myLocalStorage.accountBalance = +myLocalStorage.accountBalance - +amount.value;
            if (!confirm("Are you sure you want to proceed")) return;
            alert(`Your transfer to ${receiverCheck.firstname} ${receiverCheck.lastname} is successful. \n Thanks for banking with us.`);
        }

        receiverCheck.histories.transferHistory = [...receiverCheck.histories.transferHistory, creditor]
        senderCheck.histories.transferHistory = [...senderCheck.histories.transferHistory, debitor]
        // console.log(receiverCheck.histories.transferHistory);
        myLocalStorage.histories.transferHistory = [...myLocalStorage.histories.transferHistory, debitor]
        localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        amount.value = "";
        recieverName.value = "";
        recieverAcct.value = "";
    }
}