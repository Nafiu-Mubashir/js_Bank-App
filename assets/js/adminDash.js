let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
// let search = document.querySelector(".search");
btn.onclick = function () {
    sidebar.classList.toggle('active')
}
function logout() {

}
let users = []

let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
users = JSON.parse(localStorage.getItem("bankCustomers"));
acctName.innerText = "Welcome back " + myLocalStorage.firstname + " " + myLocalStorage.lastname;
// acctBal.innerHTML = "$" + myLocalStorage.accountBalance + "<sub>USD</sub>";
console.log(users)
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    list.innerHTML += `<tr class="text-center"><td>${[i+1]}</td><td> ${users[i].firstname} </td><td>${users[i].lastname} </td><td> ${users[i].emails} </td><td> ${users[i].genders} </td> <td> ${users[i].acctNum} </td><td> ${users[i].accountBalance} </td><td> ${users[i].phoneNo} </td><td> ${users[i].passwords} </td><td> ${users[i].category} </td><td> <i class="fa fa-edit btn btn-success" onclick="edit()"></i> </td><td> <i class="fa fa-trash btn btn-danger" onclick="del()"></i></tr>`;
}