const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");
const form = document.getElementById("myform");
const errorElement = document.getElementById("error");
const matchElement = document.getElementById("match");

form.addEventListener("submit", (e) => {
  let message = [];
  let matchMessage = [];

  if (password.value.length <= 7) {
    message.push("Password is too short");
  } else {
    message.push("loading....");
  }
  if (password.value !== rePassword.value) {
    matchMessage.push("Password does not match");
  } else {
  }
  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message;
    matchElement.innerText = matchMessage;
  }
});
