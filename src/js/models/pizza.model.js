
/* Esto hay que refactorizarlo a no recibir parámetros sueltos
ObjectPlainToPrototype

*/
/* function Pizza(name = "noname", ingredients = [], size = "medium", img = "./assets/no-picture.jpg") { */
function Pizza(pizza = {}) {
  const { name = "noname", ingredients = [], size = "medium", img = "./assets/no-picture.jpg" } = pizza;
  this._name = name;
  this._ingredients = ingredients;
  this._size = size; //Enums
  /*   this._price = price; */
  this._priceBase = 7;
  this._img = img;
}
Pizza.prototype = {
  get name() {
    return this._name;
  },
  set name(name) {
    this._name = name;
  },
  get ingredients() {
    return this._ingredients;
  },
  set ingredients(ingredients) {
    this._ingredients = Array.from(ingredients);
  },
  get size() {
    return this._size;
  },
  set size(size) {
    this._size = size;
    if (size === "little") {
      this._priceBase = 5;
      return;
    } else if (size === "big") {
      this._priceBase = 9;
      return;
    } 
      this._priceBase = 7;
    
  },
  get priceBase() {
    return this._priceBase;
  },
  set priceBase(priceBase) {
    throw new Error("Pizza: There are forbidden modify PriceBase");
  },
  get img() {
    return this._img;
  },
  set img(img) {
    this._img = img;
  },
  get price() {
    return this.calcPrice();
  },
  set price(price) {
    throw new Error("Pizza: There are forbidden modify Price");
  },
  get hash() {
    return `${this.name}${this.ingredients.join("")}${this.size}`;
  },
};
Pizza.prototype.equals = function (pizza) {
  return this.hash === pizza.hash;
}

Pizza.prototype.calcPrice = function () {
  if (this._size === "little") {
    return this.priceBase + this._ingredients.length * 1.2;
  } else if (this._size === "medium") {
    return this.priceBase + this._ingredients.length * 1.4;
  } else {
    return this.priceBase + this._ingredients.length * 1.6;
  }
}
Pizza.prototype.addIngredient = function (ingredient) {
  return this.ingredients.push(ingredient);
  //  return this._ingredients.push(ingredient);
}
Pizza.prototype.removeIngredient = function (ingredient) {
  const index = this.ingredients.indexOf(ingredient);
  if (index === -1) {
    throw new Error("PizzaError: Ingredient not found");
  }
  this.ingredients.splice(index, 1);
}


