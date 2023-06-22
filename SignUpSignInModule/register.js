
document.getElementById('register-form').addEventListener('submit', register);

function register(event) {

    event.preventDefault();

    let UserList = localStorage.getItem('UserList') ?
        JSON.parse(window.atob(localStorage.getItem('UserList'))) : [];

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    let country = document.getElementById('country').value;
    let pincode = document.getElementById('pincode').value;
    let password = document.getElementById('password').value;

    if (name && email && contact && country && pincode && password) {
        let user = {
            name: name,
            email: email,
            contact: contact,
            country: country,
            pincode: pincode,
            password: password,
        };
        let checkUser = UserList.filter((each) => {
            return each['email'] === email;
        });
        if (checkUser.length === 0) {
            UserList.push(user);
            let userListString = window.btoa(JSON.stringify(UserList));
            localStorage.setItem("UserList", userListString);
            window.location.href = "index.html";
            alert('Registered Successfully.....');
        } else {
            alert('This email has been already Registered....');
            return;
        }
    }
    else {
        alert("Empty Fields......");
        return;
    }
}
