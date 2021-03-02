function footerContent() {
  const content = document.querySelector("#content");
  const footerDiv = document.createElement("div");
  const footerBar = document.createElement("div");

  footerDiv.classList.add("footer-div");
  footerBar.classList.add("footer-bar");

  content.appendChild(footerDiv);
  footerDiv.appendChild(footerBar);
}

export default footerContent;
