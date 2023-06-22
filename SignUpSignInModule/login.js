document.getElementById('login-form').addEventListener('submit', login);

function login(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    if (!(email && pwd)) {
        alert('Empty Fields...');
        return;
    }

    let UserList = localStorage.getItem('UserList') ? JSON.parse(window.atob(localStorage.getItem('UserList'))) : [];

    let user = UserList.filter((user) => {
        return user['email'] === email && user['password'] === pwd;
    });

    if (user.length === 0) {
        alert('Email or Password is Incorrect...');
        return;
    }
    else {
        window.location.href = "welcome.html";
    }
}