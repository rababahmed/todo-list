function headerContent() {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  const leftBar = document.createElement("div");
  const upperPart = document.createElement("div");
  const leftContent = document.createElement("div");
  const menuList = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  const menuItem2 = document.createElement("li");
  const menuItem3 = document.createElement("li");

  leftBar.classList.add("left-bar");
  upperPart.classList.add("top-bar");
  leftContent.classList.add("left-content");
  menuList.classList.add("menu-list");
  menuItem1.classList.add("menu-item");
  menuItem1.classList.add("fas", "fa-inbox");
  menuItem2.classList.add("menu-item");
  menuItem2.classList.add("fas", "fa-calendar-day");
  menuItem3.classList.add("menu-item");
  menuItem3.classList.add("fas", "fa-folder");
  pageContent.classList.add("page-content");

  upperPart.innerHTML = "Todo App";
  menuItem1.innerHTML = "<span> Inbox </span>";
  menuItem2.innerHTML = "<span> Tomorrow </span>";
  menuItem3.innerHTML = "<span> Projects </span>";

  content.appendChild(leftBar);
  leftBar.appendChild(upperPart);
  upperPart.appendChild(leftContent);
  leftContent.appendChild(menuList);
  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);
  content.appendChild(pageContent);
}

export default headerContent;
