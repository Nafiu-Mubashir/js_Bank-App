let allUsers = [];
function signUp() {
    let firstName = fn.value;
    let lastName = ln.value;
    let email = em.value;
    let gender = gd.value;
    let phoneNum = pn.value;
    let password = ps.value;
    let Confirm = pss.value;
    let users = {
        firstname: firstName,
        lastname: lastName,
        emails: email,
        genders: gender,
        phoneNo: phoneNum,
        passwords: password,
        category: "Admin"
    }
    if (localStorage.getItem("bankAdmins")) {
        allUsers = JSON.parse(localStorage.getItem("bankAdmins"))
    }
    else {
        allUsers = []
    }
    allUsers.push(users);
    console.log(allUsers);
    all = JSON.stringify(allUsers);
    localStorage.setItem("bankAdmins", all);
    location.href = "adminLog.html";
    // let myCheckers = JSON.parse(localStorage.getItem("bankAdmins"));
    // let checkers = myCheckers.find((val, _) => val.emails == email);
    // if (checkers) {
    //     exist.innerText = "This email already exist";
    // }

}