import aboutImage from "./assets/about_image.jpg";

export default function show(parentElement) {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList = "about-container";
  parentElement.appendChild(aboutContainer);

  const aboutImageElement = document.createElement("img");
  aboutImageElement.classList = "about-image";
  aboutImageElement.src = aboutImage;
  aboutContainer.appendChild(aboutImageElement);

  const aboutText = document.createElement("p");
  aboutText.classList = "about-text";
  aboutText.textContent = "Born in 2008 from Gaviola's small kitchen and his big love for handmade pasta, our Melbourne ravioli bar has grown into a place where tradition meets creativity. What began as a family passion project has become a laneway favourite, celebrating ravioli in all its forms — classic, modern, and unexpected. Each parcel is crafted fresh daily, filled with seasonal Victorian produce, and served in a warm, intimate space that echoes the bustling pasta bars of northern Italy while embracing Melbourne’s own food culture. With local wines, spritzes, and the hum of good company, it’s a place to slow down, share, and savour the art of ravioli.";
  aboutContainer.appendChild(aboutText);
};