const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById('password2');
const form = document.getElementById("myform");
const errorElement = document.getElementById("error");
const matchElement = document.getElementById("match");

form.addEventListener("submit", (e) => {
  let message = [];
  let matchMessage = [];
  e.preventDefault();

  if (password.value.length <= 7) {
    message.push("Password is too short");
  } else {
    message.push("Loading....");
  }
  if (password2.value === "") {
    message.push("Password cannot be blank")
  }
  if (password.value !== password2.value) {
    matchMessage.push("Password does not match");
  }
  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message;
    matchElement.innerText = matchMessage;
  }
});
const register = e => {
  let formData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    rePassword: document.getElementById('repassword').value,
  }
  localStorage.setItem('formData', JSON.stringify(formData));
  console.log(localStorage.getItem('formData'));
  e.preventDefault();
}

function myfunction() {
  window.location = "createtodo.html"
  setTimeout("myfunction()", 2000);
  e.preventDefault();
}
