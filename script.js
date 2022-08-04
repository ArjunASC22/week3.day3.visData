let users = document.getElementsByClassName('users');

let buttons = document.querySelectorAll('button');
let dropdowns = document.getElementsByClassName('dropdown');

for (let i = 0; i < users.length; i++) {
    let userImage = document.getElementById(`image${i}`);
    userImage.src = randomUsers.results[i].picture.large;

    let name = document.getElementById(`name${i}`);
    name.innerHTML = `Name: ${randomUsers.results[i].name.first} ${randomUsers.results[i].name.last}`;

    let userGender = document.getElementById(`gender${i}`);
    let dataGender = randomUsers.results[i].gender
    userGender.innerHTML = `Gender: ${dataGender.charAt(0).toUpperCase() + dataGender.slice(1)}`;

    let userEmail = document.getElementById(`email${i}`);
    userEmail.innerHTML = `Email: ${randomUsers.results[i].email}`;

    let userPhone = document.getElementById(`phone${i}`);
    userPhone.innerHTML = `Phone #: ${randomUsers.results[i].phone}`;

    let address = document.getElementById(`address${i}`);
    address.innerHTML = `Address: ${randomUsers.results[i].location.street.number} ${randomUsers.results[i].location.street.name}, ${randomUsers.results[i].location.city}, ${randomUsers.results[i].location.state}, ${randomUsers.results[i].location.country}, ${randomUsers.results[i].location.postcode}`;
    
    let username = document.getElementById(`username${i}`);
    username.innerHTML = `Username: ${randomUsers.results[i].login.username}`;

    let password = document.getElementById(`password${i}`);
    password.innerHTML = `Password: ${randomUsers.results[i].login.password}`;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        dropdowns[i].style.display = 'block';
    }
}