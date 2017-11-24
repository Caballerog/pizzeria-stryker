 describe("#Order", () => {
  describe("should return true", () => {
    it("when Order is fill", () => {

    })
  })
  describe("should return false", () => {
    it("when Order is empty", () => {

    })
  })
})
describe("#getter y setter", () => {
  describe("should return true", () => {
    it("when getter is fill", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.get != prueba).toBeTruthy();
    })
    it("when setter is fill", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.set != prueba).toBeTruthy();
    })
    it("#when modify order and give pizza correct",()=>{
      const order = new Order();
      const prueba = () => {};
      const pizza = new Pizza();
      order.items = pizza;
      expect(order.items).toEqual(pizza);
    })
  })
  describe("should return false", () => {
    it("when getter is empty", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.get == prueba).toBeFalsy();
    })
    it("when setter is empty", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.set == prueba).toBeFalsy();
    })
    it("#when modify order and give pizza incorrect",()=>{
      const order = new Order();
      const prueba = () => {};
      const pizza = new Pizza();
      order.items = pizza;
      expect(order.items).not.toEqual("");
    })
  })
})
describe("#item",()=>{
  describe("should return true", () => {
    it("when item is fill", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.item != prueba).toBeTruthy();
    })
  })
  describe("should return false", () => {
    it("when item is empty", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.item == prueba).toBeFalsy();
    })
  })
})
describe("#addItem",()=>{
  describe("should return true", () => {
    it("when addItem is fill", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.addItem != prueba).toBeTruthy();
    })
    it("when item is add to order quantity of item is 1",()=>{
      const pizza = new Pizza();
      const order = new Order();
      order.addItem(pizza);
      expect(order.item(pizza.hash).quantity == 1).toBeTruthy();
    
    })
    it("when item is add to order quantity of item is 3",()=>{
      const pizza = new Pizza();
      const order = new Order();
      order.addItem(pizza);
      order.addItem(pizza);
      order.addItem(pizza);
      expect(order.item(pizza.hash).quantity == 3).toBeTruthy();
    })
    xit("when item is add to order",()=>{
      const pizza = new Pizza();
      const order = new Order();
      order.addItem(pizza);
      const item = Object.assign({}, pizza);
      expect(order.item(pizza.hash).item).toEqual(pizza);
    })
  })
  describe("should return false", () => {
    it("when addItem is empty", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.addItem == prueba).toBeFalsy();
    })
    it("when item is add to order quantity of item is different 1",()=>{
      const pizza = new Pizza();
      const order = new Order();
      order.addItem(pizza);
      expect(order.item(pizza.hash).quantity != 1).toBeFalsy();
    
    })
    it("when item is add to order quantity of item is different 3",()=>{
      const pizza = new Pizza();
      const order = new Order();
      order.addItem(pizza);
      order.addItem(pizza);
      order.addItem(pizza);
      expect(order.item(pizza.hash).quantity != 3).toBeFalsy();
    
    })
  })
})
describe("#removeItem",()=>{
  describe("should return true", () => {
    it("when removeItem is fill", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.removeItem != prueba).toBeTruthy();
    })
    it("when items of pizza hash is empty",()=>{
      const order = new Order();
      const pizza = new Pizza();
      order.addItem(pizza);
      order.removeItem(pizza);
      expect(order.item(pizza.hash).quantity == 0).toBeTruthy();
    })
  })
  describe("should return false", () => {
    it("when removeItem is empty", () => {
      const order = new Order();
      const prueba = () => {};
      expect(order.removeItem == prueba).toBeFalsy();
    })
    it("when items of pizza hash is not empty",()=>{
      const order = new Order();
      const pizza = new Pizza();
      order.addItem(pizza);
      order.removeItem(pizza);
      expect(order.item(pizza.hash).quantity != 0).toBeFalsy();

    })
  })
})

/*
describe("Order Model", function () {
  beforeEach(function () {});

  describe("#addItems", () => {
    it("should add an Pizza when the list is empty", () => {
      const order = new Order();
      const pizza = new Pizza();
      const name = "Test1";
      const ingredient = "tomato";
      pizza.name = name;
      pizza.ingredients = ["Pork", "Beef"];

      order.addItem(pizza);

      expect(order.item(name).quantity).toBe(1);
    });
    it("should add a new Pizza when there are not in the Order", () => {
      const order = new Order();
      const name1 = "Test1";
      const name2 = "Test2";
      const ingredients = ["Pork", "Beef"];
      const pizza1 = new Pizza(name1, ingredients, 14, "little");
      const pizza2 = new Pizza(name2, ingredients, 14, "little");

      order.addItem(pizza1);
      order.addItem(pizza2);

      expect(order.item(name2).quantity).toBe(1);
    });
    it("should add a new Pizza when there are in the Order (+1 quantity)", () => {
      const order = new Order();
      const name1 = "Test1";
      const ingredients = ["Pork", "Beef"];
      const pizza1 = new Pizza(name1, ingredients, 14, "little");
      const pizza2 = new Pizza(name1, ingredients, 14, "little");

      order.addItem(pizza1);
      order.addItem(pizza2);

      expect(order.item(name1).quantity).toBe(2);
    });
    it("should add a new Pizza when there are in the Order (another pizza's type)", () => {
      const order = new Order();
      const name1 = "Test1";
      const name2 = "Test2";
      const ingredients = ["Pork", "Beef"];
      const pizza1 = new Pizza(name1, ingredients, 14, "little");
      const pizza2 = new Pizza(name1, ingredients, 14, "little");
      const pizza3 = new Pizza(name2, ingredients, 14, "little");
      const pizza4 = new Pizza(name2, ingredients, 14, "little");
      const pizza5 = new Pizza(name2, ingredients, 14, "little");

      order.addItem(pizza1);
      order.addItem(pizza2);
      order.addItem(pizza3);
      order.addItem(pizza4);
      order.addItem(pizza5);

      expect(order.item(name2).quantity).toBe(3);
      expect(order.item(name1).quantity).toBe(2);
    });
  });
});*/ 