let checkUser = JSON.parse(localStorage.getItem("currentUsers"));
console.log(checkUser);
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
  acctNames.innerText = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
  acctBal.innerHTML = `$ ${myLocalStorage.accountBalance} <sub>USD</sub>`;
  acctNo.innerHTML = `Acct No:  ${myLocalStorage.acctNum}`;

//   var xValues = [100, 80, 60, 40, 20];
//   var yValues = [55, 49, 44, 24, 15];
//   var barColors = ["red", "green", "blue", "orange", "brown"];

//   new Chart("myChart", {
//     type: "bar",
//     data: {
//       labels: xValues,
//       datasets: [
//         {
//           backgroundColor: barColors,
//           data: yValues,
//         },
//       ],
//     },
//     options: {
//       legend: { display: false },
//       title: {
//         display: true,
//         text: "World Wine Production 2018",
//       },
//     },
//   });
}
