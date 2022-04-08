function signUp() {
    let firstName = fn.value;
    let lastName = ln.value;
    let email = em.value;
    let gender = gd.value;
    let phoneNum = pn.value;
    let password = ps.value;
    let confirmPassword = pss.value;
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
        category: "Customer",
        histories: []
    }
    if (fn.value, ln.value, em.value, gd.value, pn.value, ps.value) {
        //Check password validation here
        if (password !== confirmPassword) {
            fail.innerText = "Please check password!";
            return;
        }
        // Checks for existing user in store before saving
        const ALL_USER = JSON.parse(localStorage.getItem("bankCustomers")); 
        allUsers = ALL_USER ? ALL_USER : [];
        let check = allUsers.find((val, _) => val.emails == email);
        if (check) {
            fail.innerText = "Email already exist";
            return;
        }
        // Save user if all validation pass
        allUsers.push(users);
        console.log(allUsers);
        all = JSON.stringify(allUsers);
        localStorage.setItem("bankCustomers", all);
        firstName = " "
        lastName = " "
        email = " "
        gender = " "
        phoneNum = " "
        password = " "
        confirmPassword = " "
        location.href = "signIn.html";
    }
    else {
        fail.innerText = "Please fill the empty fields"
    }
}
