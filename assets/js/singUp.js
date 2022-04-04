let allUsers = [];
function signUp() {
    let firstName = fn.value;
    let lastName = ln.value;
    let email = em.value;
    let gender = gd.value;
    let phoneNum = pn.value;
    let password = ps.value;
    let Confirm = pss.value;
    let acctNo = Math.floor(Math.random() * 100000000)
    let users = {
        firstname: firstName,
        lastname: lastName,
        emails: email,
        genders: gender,
        phoneNo: phoneNum,
        passwords: password,
        acctNum: "026" + acctNo,
        accountBalance: 5000,
        category: "Customer"
    }
    if (localStorage.getItem("bankCustomers")) {
        allUsers = JSON.parse(localStorage.getItem("bankCustomers"))
    }
    else {
        allUsers = []
    }
    allUsers.push(users);
    console.log(allUsers);
    all = JSON.stringify(allUsers);
    localStorage.setItem("bankCustomers", all);
    location.href = "signIn.html";
}
