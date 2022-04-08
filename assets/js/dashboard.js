let checkUser = JSON.parse(localStorage.getItem("currentUsers"))
console.log(checkUser)
if (checkUser == null) {
    location.href = "signIn.html"
}
else {
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    // let search = document.querySelector(".search");
    btn.onclick = function () {
        sidebar.classList.toggle('active')
    }
    function logOut() {
        localStorage.removeItem('currentUser');
        location.href = "signIn.html"
    }
    let myLocalStorage = JSON.parse(localStorage.getItem("currentUsers"));
    acctName.innerText = `Welcome back ${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    acctNames.innerText = `${myLocalStorage.firstname} ${myLocalStorage.lastname}`;
    acctBal.innerHTML = `$ ${myLocalStorage.accountBalance} <sub>USD</sub>`;
    acctNo.innerHTML = `Acct No:  ${myLocalStorage.acctNum}`;

}