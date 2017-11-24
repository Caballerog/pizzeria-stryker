function OrderService(order = new Order()) {
    this._order = order;
  }
  
  OrderService.prototype = {
    set order(order) {
      this._order = Object.assign(new Order(), order);
    },
    get order(){
      return this._order;
    }
  };
  
  OrderService.prototype.addItem = function (pizza) {
    this._order.addItem(pizza);
  }
  OrderService.prototype.removeItem = function (pizza) {
    this._order.removeItem(pizza);
  }
  OrderService.prototype.item = function (pizza) {
    return this._order.item(pizza.hash);
  }
  OrderService.prototype.totalPrice = function () {
  
  }
  OrderService.prototype.detailPrice = function (pizza) {
    const pizzas = this._order.item(pizza.hash);
    return pizzas.item.reduce((prev, curr) => prev + curr.price, 0);
  }