const $btn = document.querySelector(".btn");
const $email = document.querySelector(".email");
const $firstName = document.querySelector(".firstname")
const $titleName = document.querySelector(".title-name");
const $lastName = document.querySelector(".lastname");


function setUsername(username) {

  $titleName.innerText = username;
  localStorage.setItem('First_name', username);
}




function saveUserData(email, firstname, lastname) {
  localStorage.setItem('email', email)
  localStorage.setItem('firstname', firstname)
  localStorage.setItem('lastname', lastname)
}

$btn.addEventListener('click', () => {
  setUsername(`${$firstName.value} ${$lastName.value}`);
  saveUserData($email.value, $firstName.value, $lastName.value)
})

const savedUsername = localStorage.getItem('First_name')

if (savedUsername) {
  setUsername(savedUsername)
}