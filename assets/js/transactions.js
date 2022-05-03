let checkUser = JSON.parse(localStorage.getItem("currentUsers"));
// let myChecker = JSON.parse(localStorage.getItem("bankCustomers"));
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
    acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    let sender = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`
    let transferLog = myLocalStorage.histories.transferHistory;
    let depositLog = myLocalStorage.histories.depositHistory;
    let withdrawLog = myLocalStorage.histories.withdrawHistory;
        for (let i = 0; i < transferLog.length; i++) {
            if (transferLog[i].sender) {
                list1.innerHTML += `<tr class="text-center"><td>${1+i}</td> <td>${transferLog[i].sender}</td> <td class="text-danger">$${transferLog[i].amountSent}</td> <td>${transferLog[i].time}</td> <td>${transferLog[i].date}</td></tr>`
                
            }
            if (transferLog[i].reciever) {
                list1.innerHTML += `<tr class="text-center"><td>${1+i}</td> <td>${transferLog[i].reciever}</td> <td class="text-success">$${transferLog[i].amountSent}</td> <td>${transferLog[i].time}</td> <td>${transferLog[i].date}</td></tr>`
                
            }
        }
        for (let i = 0; i < depositLog.length; i++) {
            list2.innerHTML += `<tr class="text-center"><td>${1+i}</td> <td>${depositLog[i].depositor}</td> <td class="text-success">$${depositLog[i].amountdeposit}</td>  <td>${depositLog[i].time}</td> <td>${depositLog[i].date}</td></tr>`
            
        }
        for (let i = 0; i < withdrawLog.length; i++) {
            list3.innerHTML += `<tr class="text-center"><td>${1+i}</td> <td>${withdrawLog[i].withdrawalNames}</td> <td class="text-danger">$${withdrawLog[i].amountWithdraw}</td> <td>${withdrawLog[i].time}</td> <td>${withdrawLog[i].date}</td></tr>`
        }
    function showTrans() {
        lists1.hidden = false;
        lists2.hidden = true;
        lists3.hidden = true;
    }
    function showDeposits() {
        lists1.hidden = true;
        lists2.hidden = false;
        lists3.hidden = true;
    }
    function showWith() {
        lists1.hidden = true;
        lists2.hidden = true;
        lists3.hidden = false;
    }
    
}