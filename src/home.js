import homeImage from "./assets/home_image.jpg";

export default function show(parentElement) {
  const homeImageElement = document.createElement("img");
  homeImageElement.classList = "home-image";
  homeImageElement.src = homeImage;
  parentElement.appendChild(homeImageElement);

  const homeContainer = document.createElement("div");
  homeContainer.classList = "home-container";
  parentElement.appendChild(homeContainer);

  const headingElement = document.createElement("div");
  headingElement.classList = "heading";
  homeContainer.appendChild(headingElement);

  const restaurantHeading = document.createElement("h1");
  restaurantHeading.textContent = "Ravioli Gavioli";
  headingElement.appendChild(restaurantHeading);

  const restaurantSubheading = document.createElement("p");
  restaurantSubheading.classList = "subheader";
  restaurantSubheading.textContent = "pasta bar";
  headingElement.appendChild(restaurantSubheading);

  const addressText = document.createElement("p");
  addressText.textContent = "67 Liegon Street, Melbourne 3000";
  homeContainer.appendChild(addressText);

  const contactText = document.createElement("p");
  contactText.textContent = "ravioli@gavioli.com | +61 3 9967 6767";
  homeContainer.appendChild(contactText);
};