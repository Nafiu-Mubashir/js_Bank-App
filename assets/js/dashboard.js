let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
// let search = document.querySelector(".search");
btn.onclick = function () {
    sidebar.classList.toggle('active')
}