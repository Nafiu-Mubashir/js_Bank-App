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
    let historyLog = myLocalStorage.histories;
    // console.log(sender);
    for (let i = 0; i < historyLog.transferHistorylength; i++) {
        const element = historyLog.transferHistory[i];
        list.innerHTML += `<tr class="text-center"><td> ${i+1} </td><td> ${element.senderNames} </td><td> ${element.amountSent} </td><td> ${element.recieverNames} </td><td> ${element.time} </td><td> ${element.date} </td></tr>`;
    }
}