let checkUser = JSON.parse(localStorage.getItem("currentUsers"));
// console.log(checkUser);
if (checkUser == null) {
  location.href = "signIn.html";
} else {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  // let search = document.querySelector(".search");
  btn.onclick = function () {
    sidebar.classList.toggle("active");
  };

  function logOut() {
    localStorage.removeItem("currentUsers");
    location.href = "signIn.html";
  }
  let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
  acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
  // acctNames.innerText = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
  acctBal.innerHTML = `$ ${myLocalStorage.accountBalance} <sub>USD</sub>`;
  acctNo.innerHTML = `Acct No:  ${myLocalStorage.acctNum}`;
  // console.log(myLocalStorage.histories);
  let transferLog = myLocalStorage.histories.transferHistory;
  let depositLog = myLocalStorage.histories.depositHistory;
  let withdrawLog = myLocalStorage.histories.withdrawHistory;
  for (let i = 0; i < transferLog.length; i++) {
    if (transferLog[i].sender) {
      one.innerHTML = `<tr class="text-center"> <td>${transferLog[i].sender}</td> <td class="text-danger">$${transferLog[i].amountSent}</td> <td>${transferLog[i].time}</td> <td>${transferLog[i].date}</td></tr>`
    }
    if (transferLog[i].reciver) {
      one.innerHTML = `<tr class="text-center"> <td>${transferLog[i].reciever}</td> <td class="text-success">$${transferLog[i].amountSent}</td>  <td>${transferLog[i].time}</td> <td>${transferLog[i].date}</td><td>Transfer</td></tr>`
    }
  }
  for (let i = 0; i < depositLog.length; i++) {
    two.innerHTML = `<tr class="text-center"> <td>${depositLog[i].depositor}</td> <td class="text-success">$${depositLog[i].amountdeposit}</td>  <td>${depositLog[i].time}</td> <td>${depositLog[i].date}</td></tr>`

  }
  for (let i = 0; i < withdrawLog.length; i++) {
    three.innerHTML = `<tr class="text-center"> <td>${withdrawLog[i].withdrawalNames}</td> <td class="text-danger">$${withdrawLog[i].amountWithdraw}</td> <td>${withdrawLog[i].time}</td> <td>${withdrawLog[i].date}</td></tr>`
  }
  // transferLog.filter(() => )
  // let sum = transferLog.reduce((total, anyVal) => {
  //   total.type + anyVal.amountSent;
  //   console.log(total + anyVal.amountSent);
  // })
}