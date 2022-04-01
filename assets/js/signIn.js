let allCurrentUsers = [];
let myLocalStorage = JSON.parse(localStorage.getItem("bankCustomers"))
function signIn() {
    let currentUsers = {
        email: eml.value,
        password: pwd.value,
        category: "Customer"
    }
    let myCurrentUser = myLocalStorage.find((val, _) => val.emails == eml.value && val.passwords == pwd.value && val.category == currentUsers.category)
    if (myCurrentUser) {
        allCurrentUsers.push(myCurrentUser);
        all = JSON.stringify(allCurrentUsers);
        localStorage.setItem("currentUsers", all);
        // location.href = "dashboard.html";
    }
    else {
        errors.innerText = "Incorrect password or email";
    }
}