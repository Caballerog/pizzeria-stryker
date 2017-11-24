
function PizzaService(pizzas, ingredients) {
  this._pizzas = pizzas; // [key: string]: Pizza
  this._pizzaSelected = new Pizza();
  this._ingredients = ingredients;
}

PizzaService.prototype = {
  get pizzas() {
    return this._pizzas;
  },
  set pizzas(pizzas) {
    this._pizzas = pizzas.map(pizza => new Pizza(pizza));
  },
  get ingredients() {
    return this._ingredients;
  },
  set ingredients(ingredients) {
    this._ingredients = ingredients;
  },
  get pizzaSelected() {
    return this._pizzaSelected;
  },
  set pizzaSelected(pizza) {
    this._pizzaSelected = Object.assign(new Pizza(), pizza);
  }

}

PizzaService.prototype.addIngredientPizza = function (ingredient) {
  this.pizzaSelected.addIngredient(ingredient);
}
PizzaService.prototype.removeIngredientPizza = function (ingredient) {
  this.pizzaSelected.removeIngredient(ingredient);
}
PizzaService.prototype.setSizePizza = function (size) {
  this.pizzaSelected.size = size;
}

/* PizzaService.prototype.getPizza = function (namePizza) {
  return this.pizza[namePizza];
}
PizzaService.prototype.setPizza = function(name, pizza){
  if(this.pizzas[name]){
    th
  } */
