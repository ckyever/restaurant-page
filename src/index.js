import "./styles.css";
import showHome from './home.js';
import showMenu from './menu.js';

const contentElement = document.querySelector("#content");
const clearContent = () => {
  contentElement.innerHTML = "";
};

const homeButton = document.querySelector("button.home");
homeButton.addEventListener("click", () => {
  clearContent();
  showHome(contentElement);
});

const menuButton = document.querySelector("button.menu");
menuButton.addEventListener("click", () => {
  clearContent();
  showMenu(contentElement);
});

// Default to home page
showHome(contentElement);