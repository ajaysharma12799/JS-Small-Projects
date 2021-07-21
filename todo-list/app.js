let todo = document.querySelector(".todo");
let submitButton = document.querySelector("button");
let displayField = document.querySelector(".output");
let todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", showTodo);
submitButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo() {
    let todoArray;
    if(todo.value === "") {
        // Show Error
        showError("Enter Todo", "error");
    }
    else {
        if(localStorage.getItem("todos") === null) {
            todoArray = [];
        }
        else {
            todoArray = JSON.parse(localStorage.getItem("todos"));
        }
        // Add Value in Todo Array
        todoArray.push(todo.value.trim());
        // Add Todo Array to LocalStorage
        localStorage.setItem("todos", JSON.stringify(todoArray));
        // Show Added Todo To Screen
        createElement(todo.value);
        // Clear Input Field
        todo.value = "";
    }
}

function deleteTodo(event) {
    let item = event.target;
    let textContentArray = item.textContent.split("");
    textContentArray.splice(textContentArray.length - 1, 1);
    let textContent = textContentArray.join("");

    let todoArray;
    if(localStorage.getItem("todos" === null)) {
        todoArray = [];
    }
    else {
        todoArray = JSON.parse(localStorage.getItem("todos"));
    }

    // Get Index of Element Which Will be Removed
    let todoIndex = todoArray.indexOf(textContent);
    // Splice On Todo Array
    todoArray.splice(todoIndex, 1);
    // Again Set Todo Array to LocalStorage
    localStorage.setItem("todos", JSON.stringify(todoArray));
    item.remove();
}

function showTodo() {
    let todoArray;
    if(localStorage.getItem("todos") === null) {
        todoArray = [];
    }
    else {
        todoArray = JSON.parse(localStorage.getItem("todos"));
    }
    todoArray.forEach(element => {
        createElement(element);
    });
}

function createElement(title) {
    // Creating Delete Button
    let cross = document.createElement("button");
    cross.innerText = "X";
    cross.classList.add("crossButton");

    // Creating Li Element
    let li = document.createElement("li");
    let liText = document.createTextNode(title);
    li.appendChild(liText);
    li.appendChild(cross);
    li.classList.add("todos");

    // Adding Final Todo
    todoList.appendChild(li);
}

function showError(message, className) {
    // Creating DOM Element
    let div = document.createElement("div");
    let divText = document.createTextNode(message);
    div.appendChild(divText);
    div.classList.add(className);
    document.querySelector(".container").style.height = "85vh";

    // Targeting Parent Element
    let parentElement = document.querySelector(".container");
    parentElement.insertAdjacentElement("beforebegin", div);
}