import { format } from "date-fns";

// query selectors
const taskWrapper = document.querySelector(".task-wrapper");
const formTitle = document.querySelector(".form-title");
const formDate = document.querySelector(".form-date");
const submitBtn = document.querySelector(".submit-button");
const formDiv = document.createElement("div");

let myList = [];

function Task(title, date) {
  this.title = title;
  this.date = date;
  this.info = function () {
    return [title, date];
  };
  this.pushToTheList = function () {
    myList.push(this);
  };
  this.pushToTheList();
}

function todoForm() {
  const taskWrapper = document.querySelector(".task-wrapper");
  const formDiv = document.createElement("div");
  const form = document.createElement("form");
  const taskInput = document.createElement("input");
  const dateInput = document.createElement("input");
  const submitBtn = document.createElement("button");

  formDiv.classList.add("form-div");
  form.classList.add("form");
  taskInput.classList.add("form-title");
  dateInput.classList.add("form-date");
  dateInput.type = "date";
  submitBtn.classList.add("submit-button");
  submitBtn.type = "submit";

  submitBtn.innerHTML = "Add";

  taskWrapper.appendChild(formDiv);
  formDiv.appendChild(form);
  form.appendChild(taskInput);
  form.appendChild(dateInput);
  form.appendChild(submitBtn);
}

function consoleTodo() {
  const formTitle = document.querySelector(".form-title");
  const formDate = document.querySelector(".form-date");

  let myTask = new Task(formTitle.value, formDate.value);

  const todoList = document.querySelector(".todo-list");
  const todoDiv = document.createElement("div");
  const newTodo = document.createElement("li");
  const completedBtn = document.createElement("button");
  const trashBtn = document.createElement("button");

  todoDiv.classList.add("todo");
  newTodo.classList.add("todo-item");
  completedBtn.classList.add("completed-btn");
  trashBtn.classList.add("trash-button");

  newTodo.innerHTML =
    myTask.title +
    " <span>Due " +
    format(new Date(myTask.date), "do LLL, yy") +
    "</span>";

  completedBtn.innerHTML = "<i class='fas fa-check'></i>";
  trashBtn.innerHTML = "<i class='fas fa-minus-circle'></i>";

  todoList.appendChild(todoDiv);
  todoDiv.appendChild(newTodo);
  todoDiv.appendChild(completedBtn);
  todoDiv.appendChild(trashBtn);

  // Add to local storage
  saveLocalTodos(myTask);

  formTitle.value = "";
  formDate.value = "";

  //event listeners
  todoList.addEventListener("click", deleteCheck);
}

function todoList() {
  const pageContent = document.querySelector(".page-content");
  const todoList = document.createElement("ul");
  todoList.classList.add("todo-list");

  pageContent.appendChild(todoList);
}

function saveLocalTodos(newTodo) {
  if (localStorage.getItem("myList") === null) {
    myList = [];
  } else {
    myList = JSON.parse(localStorage.getItem("myList"));
  }
  myList.push(newTodo);
  localStorage.setItem("myList", JSON.stringify(myList));
}

function getTodos() {
  if (localStorage.getItem("myList") === null) {
    myList = [];
  } else {
    myList = JSON.parse(localStorage.getItem("myList"));
  }
  myList.forEach(function (myList) {
    const formTitle = document.querySelector(".form-title");
    const formDate = document.querySelector(".form-date");

    let myTask = new Task(formTitle.value, formDate.value);

    const todoList = document.querySelector(".todo-list");
    const todoDiv = document.createElement("div");
    const newTodo = document.createElement("li");
    const completedBtn = document.createElement("button");
    const trashBtn = document.createElement("button");

    todoDiv.classList.add("todo");
    newTodo.classList.add("todo-item");
    completedBtn.classList.add("completed-btn");
    trashBtn.classList.add("trash-button");

    newTodo.innerHTML =
      myList.title +
      " <span>Due " +
      format(new Date(myList.date), "do LLL, yy") +
      "</span>";

    completedBtn.innerHTML = "<i class='fas fa-check'></i>";
    trashBtn.innerHTML = "<i class='fas fa-minus-circle'></i>";

    todoList.appendChild(todoDiv);
    todoDiv.appendChild(newTodo);
    todoDiv.appendChild(completedBtn);
    todoDiv.appendChild(trashBtn);

    //event listeners
    todoList.addEventListener("click", deleteCheck);
  });
}

function removeLocalTodos(todo) {
  if (localStorage.getItem("myList") === null) {
    myList = [];
  } else {
    myList = JSON.parse(localStorage.getItem("myList"));
  }
  const todoIndex = todo.children[0].innerText;
  myList.splice(myList.indexOf(todoIndex), 1);
  localStorage.setItem("myList", JSON.stringify(myList));
}

function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;

    //animation
    todo.classList.add("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  // complete
  if (item.classList[0] === "completed-btn") {
    const todo = item.parentElement;
    todo.classList.add("hooray");
    removeLocalTodos(todo);
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }
}

export { todoForm, getTodos, consoleTodo, todoList };
