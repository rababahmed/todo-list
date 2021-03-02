import headerContent from "./header";
import inboxContent from "./inbox";
import footerContent from "./footer";

import {
  todoForm,
  getTodos,
  consoleTodo,
  addToDo,
  todoList,
} from "./taskController";

function siteController() {
  headerContent();
  inboxContent();
  todoForm();
  todoList();

  const submitBtn = document.querySelector(".submit-button");

  // event listeners
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    consoleTodo();
  });
  document.addEventListener("DOMContentLoaded", getTodos);
}

export default siteController;
