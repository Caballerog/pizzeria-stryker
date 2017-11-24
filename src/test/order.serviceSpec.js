describe("#OrdenService",()=>{
    describe("should return true", () => {
        it("when OrdenService is fill", () => {
         })
      })
      describe("should return false", () => {
        it("when OrdenService is empty", () => {
          })
      })
})
describe("#set",()=>{
    describe("should return true", () => {
        it("when set is fill", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.set != prueba).toBeTruthy();
         })
         it("when get is fill", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.get != prueba).toBeTruthy();
         })
         it("when set order with a new order",()=>{
          
         })
      })
      describe("should return false", () => {
        it("when set is empty", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.set == prueba).toBeFalsy();  
        })
        it("when get is empty", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.get == prueba).toBeFalsy();  
        })
      })
})
describe("#addItem",()=>{
    describe("should return true", () => {
        it("when addItem is fill", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.addItem != prueba).toBeTruthy();
        })
        it("when add item to order is equal to order",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            const prueba = new Order();
            prueba.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.order).toEqual(prueba);
        })
      })
      describe("should return false", () => {
        it("when addItem is empty", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.addItem == prueba).toBeFalsy(); 
        })
        it("when add item to order is different to order",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            expect(orderService.order).not.toEqual();
        })
      })
})
describe("#removeItem",()=>{
    describe("should return true", () => {
        it("when set is fill", () => {
            const orderService = new OrderService();
            const prueba = () => {};
            expect(orderService.removeItem != prueba).toBeTruthy(); 
        })
        it("when remove item to items",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            const prueba = new Order();
            prueba.addItem(pizza);
            prueba.removeItem(pizza);
            orderService.addItem(pizza);
            orderService.removeItem(pizza);
            expect(orderService.order).toEqual(prueba);
      })
      })
      describe("should return false", () => {
        it("when set is empty", () => {
            const orderService = new OrderService();
            const prueba = () => {};
            expect(orderService.removeItem == prueba).toBeFalsy();  
        })
        it("when remove item to items",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.removeItem(pizza);
            expect(orderService.order).not.toEqual();
      })
      })
})
describe("#item",()=>{
    describe("should return true", () => {
        it("when item is fill", () => {  
            const orderService = new OrderService();
            expect(orderService.addItem != undefined).toBeTruthy(); 
        })
        it("when quantity of item is 2",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.item(pizza).quantity == 2).toBeTruthy();
        })
        it("when quantity of item is 4",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.item(pizza).quantity == 4).toBeTruthy();
        })
       
      })
      describe("should return false", () => {
        it("when item is empty", () => {
            const orderService = new OrderService();
            expect(orderService.addItem == undefined).toBeFalsy();  
        })
        it("when quantity of item is diferent 2",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.item(pizza).quantity != 2).toBeFalsy();
        })
        it("when quantity of item is different 4",()=>{
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.item(pizza).quantity != 4).toBeFalsy();
        })
      })
})
describe("#totalPrice",()=>{
    describe("should return true", () => {
        it("when totalPrice is fill", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.addItem != prueba).toBeTruthy(); 
        })
      })
      describe("should return false", () => {
        it("when totalPrice is empty", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.totalPrice == prueba).toBeFalsy();
        })
      })
})
describe("#detailPrice",()=>{
    describe("should return true", () => {
        it("when detailPrice is fill", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.detailPrice != prueba).toBeTruthy();
        })
        it("when add 2 pizzas of constructor detailPrice return 14",()=>{

            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.detailPrice(pizza) == 14).toBeTruthy();
        })
        it("when pizza is  and quantity is 2 order detailPrice return 23.6",()=>{
            const prueba = {
                name: 'Prosciutto',
                ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
                size: 'little',
                img: 'assets/prosciutto.png'
              };
              const pizza = new Pizza(prueba);
              const orderService = new OrderService();
              orderService.addItem(pizza);
              orderService.addItem(pizza);
              expect(orderService.detailPrice(pizza) == 23.6).toBeTruthy();

        })
      })
      describe("should return false", () => {
        it("when detailPrice is empty", () => {
            const order = new Order();
            const orderService = new OrderService(order);
            const prueba = () => {};
            expect(orderService.detailPrice == prueba).toBeFalsy();  
        })
        it("when add 2 pizzas of constructor detailPrice return different 14",()=>{
            const order = new Order();
            const orderService = new OrderService();
            const pizza = new Pizza();
            orderService.addItem(pizza);
            orderService.addItem(pizza);
            expect(orderService.detailPrice(pizza) != 14).toBeFalsy();
        })
        it("when pizza is  and quantity is 2 order detailPrice return different 23.6",()=>{
            const prueba = {
                name: 'Prosciutto',
                ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
                size: 'little',
                img: 'assets/prosciutto.png'
              };
              const pizza = new Pizza(prueba);
              const orderService = new OrderService();
              orderService.addItem(pizza);
              orderService.addItem(pizza);
              expect(orderService.detailPrice(pizza) != 23.6).toBeFalsy();

        })
      })
})