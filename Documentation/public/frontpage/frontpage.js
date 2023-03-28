const loginButton = document.getElementById("loginButton");

function login(event) {
    event.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    if (username.value === "admin" && password.value === "123456") {
        window.location.href = "./documentation-week-1"
    }
}


loginButton.addEventListener('click', login);