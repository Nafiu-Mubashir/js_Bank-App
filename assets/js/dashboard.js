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
  acctBal.innerHTML = `${myLocalStorage.accountBalance} <sub>USD</sub>`;
  acctNo.innerHTML = `Acct No:  ${myLocalStorage.acctNum}`;
  // console.log(myLocalStorage.histories);
  let transferLog = myLocalStorage.histories.transferHistory;
  let depositLog = myLocalStorage.histories.depositHistory;
  let withdrawLog = myLocalStorage.histories.withdrawHistory;
  let totalDebit = 0;
  let totalCredit = 0;
  for (let i = 0; i < transferLog.length; i++) {
    if (transferLog[i].sender) {
      one.innerHTML = `<tr class="text-center"> <td>${transferLog[i].sender}</td> <td class="text-danger">$${transferLog[i].amountSent}</td> <td>${transferLog[i].time}</td> <td>${transferLog[i].date}</td></tr>`
      // credit.innerHTML = "$ " + transferLog[i].amountSent
    }
    if (transferLog[i].reciver) {
      one.innerHTML = `<tr class="text-center"> <td>${transferLog[i].reciever}</td> <td class="text-success">$${transferLog[i].amountSent}</td>  <td>${transferLog[i].time}</td> <td>${transferLog[i].date}</td><td>Transfer</td></tr>`
    }
  }
  for (let i = 0; i < depositLog.length; i++) {
    two.innerHTML = `<tr class="text-center"> <td>${depositLog[i].depositor}</td> <td class="text-success">$${depositLog[i].amountdeposit}</td>  <td>${depositLog[i].time}</td> <td>${depositLog[i].date}</td></tr>`
    totalCredit += Number(depositLog[i].amountdeposit)
  }
  console.log(totalCredit);
  for (let i = 0; i < withdrawLog.length; i++) {
    three.innerHTML = `<tr class="text-center"> <td>${withdrawLog[i].withdrawalNames}</td> <td class="text-danger">$${withdrawLog[i].amountWithdraw}</td> <td>${withdrawLog[i].time}</td> <td>${withdrawLog[i].date}</td></tr>`
    totalDebit += Number(withdrawLog[i].amountWithdraw)
  }
  console.log(totalDebit);
  
  const transCredit = transferLog.reduce((tot, record)=> record.transType === 'Credit' ? tot + Number(record.amountSent) : tot , 0)
  const transDebit = transferLog.reduce((tot, record)=> record.transType === 'Debit' ? tot + Number(record.amountSent) : tot , 0)
  console.log(transCredit, transDebit)
  credit.innerHTML = transCredit + totalCredit
  debit.innerHTML = transDebit + totalDebit
  console.log(debit.innerHTML, credit.innerHTML);
//   let totalC = 0
//   let totalD = 0
// transferLog.map((val)=> val.transType === "Credit" ? totalC += Number(val.amountSent) :  totalD += Number(val.amountSent))
// console.log(totalC, totalD)  
}