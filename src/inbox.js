function inboxContent() {
  const pageContent = document.querySelector(".page-content");
  const headerDiv = document.createElement("div");
  const taskWrapper = document.createElement("div");

  headerDiv.classList.add("header");
  taskWrapper.classList.add("task-wrapper");

  headerDiv.innerHTML = "My Inbox";

  pageContent.appendChild(headerDiv);
  headerDiv.appendChild(taskWrapper);
}

export default inboxContent;
