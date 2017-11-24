
function Order() {
  this._items = {};
}
Order.prototype = {
  set items(items) {
    this._items = Object.assign({}, items);
  },
  get items() {
    return this._items;
  }
};
Order.prototype.item = function(keyPizza) {
  return {
    item: this._items[keyPizza],
    quantity: this._items[keyPizza].length
  };
};
Order.prototype.addItem = function(pizza) {
  const item = this._items[pizza.hash];
  if (item) {
    item.push(pizza);
  } else {
    this._items[pizza.hash] = [pizza];
  }
};
Order.prototype.removeItem = function(pizza) {
  this._items[pizza.hash] = [];
};