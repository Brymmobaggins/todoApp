// Selector
const todoInput = document.querySelector(".todo-Input")
const todoBtn = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// Event listenter
todoBtn.addEventListener("click", addTodo);

// function
function addTodo(event){
    event.preventDefault()
    console.log("hello")
}