const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.getElementById("myform");
const errorElement = document.getElementById("error");
// const sucessElement = document.getElementById('sucess')

form.addEventListener("submit", (e) => {
  let message = [];

  if (password.value.length <= 7) {
    message.push("Password is too short");
  }else{
      message.push("Loading...")
  }

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join(",");
  }
  
});