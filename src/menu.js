class FoodItem  {
  constructor(itemName, price, translation) {
    this.itemName = itemName;
    this.price = price;
    this.translation = translation;
  }
};

const createMenuListItem = (food) => {
  const listItem = document.createElement("li");

  const line1 = document.createElement("p");
  line1.classList = "item";
  line1.append(`${food.itemName} `);
  const price = document.createElement("span");
  price.classList = "price";
  price.textContent = food.price;
  line1.append(price);
  listItem.appendChild(line1);

  const line2 = document.createElement("p");
  line2.classList = "translation";
  line2.textContent = food.translation;
  listItem.appendChild(line2);

  return listItem;
};

const appetizersList = [
  new FoodItem("Pane e olio", 4, "bread - olive oil - seasalt"),
  new FoodItem("Pecorino e miele", 4, "sheep’s cheese - honey - black peper"),
  new FoodItem("Affettato", 8, "daily sliced meat"),
];

const ravioliList = [
  new FoodItem("Specialità", 19.5, "daily special"),
  new FoodItem("Funghi", 17.5, "mushrooms – butter-sage sauce"),
  new FoodItem("Piselli", 16, "peas - lemon - butter sauce - mint"),
  new FoodItem("Spinaci e ricotta", 18.5, "raised beef – butter sage sauce"),
];

export default function show(parentElement) {
  const menuCard = document.createElement("div");
  menuCard.classList = "menu-card";
  parentElement.appendChild(menuCard);

  const restaurantName = document.createElement("h2");
  restaurantName.textContent = "Ravioli Gavioli";
  menuCard.appendChild(restaurantName);

  const menuItems = document.createElement("div");
  menuItems.classList = "menu-items";
  menuCard.appendChild(menuItems);

  // Add appetizer items
  const appetizersMenu = document.createElement("div");
  appetizersMenu.classList = "appetizers";
  menuItems.appendChild(appetizersMenu);

  const appetizersHeader = document.createElement("h3");
  appetizersHeader.textContent = "Appetizers";
  appetizersMenu.appendChild(appetizersHeader);

  const appetizersListElement = document.createElement("ul");
  appetizersList.forEach(appetizer => {
    const item = createMenuListItem(appetizer);
    appetizersListElement.appendChild(item);
  });
  appetizersMenu.appendChild(appetizersListElement);

  // Add ravioli items
  const ravioliMenu = document.createElement("div");
  ravioliMenu.classList = "ravioli";
  menuItems.appendChild(ravioliMenu);

  const ravioliHeader = document.createElement("h3");
  ravioliHeader.textContent = "Ravioli";
  ravioliMenu.appendChild(ravioliHeader);

  const ravioliListElement = document.createElement("ul");
  ravioliList.forEach(ravioli => {
    const item = createMenuListItem(ravioli);
    ravioliListElement.appendChild(item);
  });
  ravioliMenu.appendChild(ravioliListElement);
};