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
            recieverAccts: recieverAcct.value,
            amountSent: amount.value
        }
        if (recieverName.value == "") {
            errors.innerText = "Account does not exist";
            location.reload("transfer.html");
            return;
        }
        for (let i = 0; i < myChecker.length; i++) {
            if (myChecker[i].acctNum == recieverAcct.value) {
                myChecker[i].accountBalance = +myChecker[i].accountBalance + +amount.value;
                myLocalStorage.accountBalance = +myLocalStorage.accountBalance + +amount.value;
            }
            if (myChecker[i].acctNum == myLocalStorage.acctNum) {
                myChecker[i].accountBalance = +myChecker[i].accountBalance - +amount.value;
                myLocalStorage.accountBalance = +myLocalStorage.accountBalance - +amount.value;
                // console.log(myChecker[i].histories);
                if (!confirm("Are you sure you want to proceed")) return;
                // console.log(myLocalStorage.accountBalance);
            }
            // for (let j = 0; j < array.length; j++) {
                //     const element = array[j];
                
                // }
            }
        // localStorage.setItem('currentUsers', JSON.stringify(myLocalStorage));
        // localStorage.setItem('bankCustomers', JSON.stringify(myChecker));
        // amount.value = " "
// +234-01-4480000 GTB
    }
}
var details;
function trans() {
    let myLocalStorage = JSON.parse(localStorage.getItem("bankCustomers"));
   for (let index = 0; index < myLocalStorage.length; index++) {
       const element = myLocalStorage[index].histories;
        details = element
   }
   let ong = {
       l:'joshua'
   }
   details.push(ong)
   console.log(details)
}