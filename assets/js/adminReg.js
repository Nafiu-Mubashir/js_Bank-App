let allUsers = [];
function signUp() {
    let firstName = fn.value;
    let lastName = ln.value;
    let email = em.value;
    let gender = gd.value;
    let phoneNum = pn.value;
    let password = ps.value;
    let confirmPassword = pss.value;
    let users = {
        firstname: firstName,
        lastname: lastName,
        emails: email,
        genders: gender,
        phoneNo: phoneNum,
        passwords: password,
        category: "Admin"
    }
    if ((fn.value, ln.value, em.value, gd.value, pn.value, ps.value)) {
        //Check password validation here
        if (password !== confirmPassword) {
          exist.innerText = "Password does not match";
          return;
        }
        // Checks for existing user in store before saving
        const ALL_USER = JSON.parse(localStorage.getItem("bankAdmins"));
        allUsers = ALL_USER ? ALL_USER : [];
        let check = allUsers.find((val, _) => val.emails == email);
        if (check) {
          exist.innerText = "Email already exist";
          return;
        }
        //Check phone validation here
        if (pn.value.length != 11) {
          exist.innerText = "Your phone number is not complete";
          return;
        }
        // Save user if all validation pass
        allUsers.push(users);
        // console.log(allUsers);
        all = JSON.stringify(allUsers);
        localStorage.setItem("bankAdmins", all);
        firstName = " ";
        lastName = " ";
        email = " ";
        gender = " ";
        phoneNum = " ";
        password = " ";
        confirmPassword = " ";
        location.href = "adminLog.html";
      } else {
        exist.innerText = "Please fill the empty fields";
      }
    // if (localStorage.getItem("bankAdmins")) {
    //     allUsers = JSON.parse(localStorage.getItem("bankAdmins"))
    // }
    // else {
    //     allUsers = []
    // }
    // allUsers.push(users);
    // console.log(allUsers);
    // all = JSON.stringify(allUsers);
    // localStorage.setItem("bankAdmins", all);
    // location.href = "adminLog.html";

}