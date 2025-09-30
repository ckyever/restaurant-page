import "./styles.css";
import showHome from './home.js';
import showMenu from './menu.js';
import showAbout from './about.js';

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

const aboutButton = document.querySelector("button.about");
aboutButton.addEventListener("click", () => {
  clearContent();
  showAbout(contentElement);
});

// Default to home page
showHome(contentElement);