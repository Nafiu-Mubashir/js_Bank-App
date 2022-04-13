let count = 0;
let counter = 50;
let myLocalStorage = JSON.parse(localStorage.getItem("bankCustomers"))
function signIn() {
    let currentUsers = {
        email: eml.value,
        password: pwd.value,
        category: "Customer"
    }
    let myCurrentUser = myLocalStorage.find((val, _) => val.emails == eml.value && val.passwords == pwd.value && val.category == currentUsers.category)
    if (myCurrentUser) {
        all = JSON.stringify(myCurrentUser);
        localStorage.setItem("currentUsers", all);
        alert(`Login successful ${myCurrentUser.firstname} ${myCurrentUser.lastname}`)
        location.href = "dashboard.html";
    }
    else {
        errors.innerText = "Incorrect password or email";
        count++
        // console.log(count);
        if (count == 3) {
            document.getElementById("login").disabled = true;
            document.getElementById("eml").disabled = true;
            document.getElementById("pwd").disabled = true;
            errors.innerText = " "
            var interval = setInterval(() => {
                counter--;
                return counts.innerText = `Wait for ${counter} seconds and try again`;
            }, 1000)

            setTimeout(() => {
                document.getElementById("login").disabled = false;
                document.getElementById("eml").disabled = false;
                document.getElementById("pwd").disabled = false;
                counts.innerText = " ";
                clearInterval(interval);
                // eml.value = " ";
                // pwd.value = " ";
                location.reload("signIn.html");
            },
                50000)
            return
        }
    }
}