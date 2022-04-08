let myLocalStorage = JSON.parse(localStorage.getItem("bankAdmins"))
function signIn() {
    let currentUsers = {
        email: eml.value,
        password: pwd.value,
        category: "Admin"
    }
    let myCurrentUser = myLocalStorage.find((val, _) => val.emails == eml.value && val.passwords == pwd.value && val.category == currentUsers.category)
    if (myCurrentUser) {
        all = JSON.stringify(myCurrentUser);
        console.log(myCurrentUser);
        localStorage.setItem("currentAdmins", all);
        location.href = "adminDash.html";
    }
    else {
        errors.innerText = "Incorrect password or email";
    }
}