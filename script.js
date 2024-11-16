
const validUser = {
    username: "admin",
    password: "admin123"
};

function login(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser.username && password === validUser.password) {
        alert("Login berhasil!");
        window.location.href = "menu.html"; 
    } else {
        alert("Username atau Password salah!");
    }
}


function register(event) {
    event.preventDefault();
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "login.html"; 
}
function logout() {
    alert("Anda telah berhasil logout!");
    window.location.href = "login.html";
}