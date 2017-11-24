describe("#Pizza", () => {
  describe("should return true", () => {
    it("when Pizza is fill", () => {
      const prueba = () => {}
      expect(Pizza != prueba).toBeTruthy();
    })
    it("when name is equal Prosciutto", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.name == 'Prosciutto').toBeTruthy();
    })
    it("when name is equal noname with object", () => {
      const prueba = {
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.name == 'noname').toBeTruthy();
    })
    it("when name is equal noname without object", () => {

      const pizza = new Pizza();
      expect(pizza.name == 'noname').toBeTruthy();
    })
    it("when ingredient is ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese']", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingre = ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese']
      expect(pizza.ingredients).toEqual(ingre)
    })
    it("when ingredient is [] with object", () => {
      const prueba = {
        name: 'Prosciutto',
       size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingre = [];
      expect(pizza.ingredients).toEqual(ingre)
    })
    it("when ingredient is [] without object", () => {
      const pizza = new Pizza();
      const ingre = [];
      expect(pizza.ingredients).toEqual(ingre)
    })
    it("when size is little", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.size == 'little').toBeTruthy();
    })
    it("when size is medium with object", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.size == 'medium').toBeTruthy();
    })
    it("when size is medium without object", () => {
  
      const pizza = new Pizza();
      expect(pizza.size == 'medium').toBeTruthy();
    })
    it("when priceBase is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.priceBase == 7).toBeTruthy();
    })
    it("when priceBase is 7 without object",()=>{
      const pizza = new Pizza();
      expect(pizza.priceBase == 7).toBeTruthy();
    })
    it("when img is assets/prosciutto.png",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.img == 'assets/prosciutto.png').toBeTruthy();
    })
    it("when img is ./assets/no-picture.jpg with object",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.img == './assets/no-picture.jpg').toBeTruthy();
    })
    it("when img is ./assets/no-picture.jpg without object",()=>{
      const pizza = new Pizza();
      expect(pizza.img == './assets/no-picture.jpg').toBeTruthy();
    })
  })
  describe("should return false", () => {
    it("when Pizza is empty", () => {
      const prueba = () => {}
      expect(Pizza == prueba).toBeFalsy();
    })
    it("when name is diferent Prosciutto", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.name != 'Prosciutto').toBeFalsy();
    })
    it("when name is diferent noname with object", () => {
      const prueba = {
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.name != 'noname').toBeFalsy();
    })
    it("when name is equal noname without object", () => {
      const pizza = new Pizza();
      expect(pizza.name != 'noname').toBeFalsy();
    })
    it("when ingredient is diferent ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese']", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.ingredients).not.toEqual("");
    })
    it("when ingredient is diferent [] with object", () => {
      const prueba = {
        name: 'Prosciutto',
       size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
     
      expect(pizza.ingredients).not.toEqual("")
    })
    it("when ingredient is diferent [] without object", () => {
      const pizza = new Pizza();
     
      expect(pizza.ingredients).not.toEqual("")
    })
    it("when size is little", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.size != 'little').toBeFalsy();
    })
    it("when size is diferent medium with object", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.size != 'medium').toBeFalsy();
    })
    it("when size is diferent medium without object", () => {
  
      const pizza = new Pizza();
      expect(pizza.size != 'medium').toBeFalsy();
    })
    it("when priceBase is diferent 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.priceBase != 7).toBeFalsy();
    })
    it("when priceBase is diferent 7 without object",()=>{
      const pizza = new Pizza();
      expect(pizza.priceBase != 7).toBeFalsy();
    })
    it("when img is diferent assets/prosciutto.png",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.img != 'assets/prosciutto.png').toBeFalsy();
    })
    it("when img is diferent ./assets/no-picture.jpg with object",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.img != './assets/no-picture.jpg').toBeFalsy();
    })
    it("when img is diferent ./assets/no-picture.jpg without object",()=>{
      const pizza = new Pizza();
      expect(pizza.img != './assets/no-picture.jpg').toBeFalsy();
    })

  })
})
describe("#getter y setter", () => {
  describe("should return true", () => {
    it("when getter is fill", () => {
      const prueba = () => {}
    // expect(Pizza.get != prueba).toBeTruthy();
    })
    it("when setter is fill", () => {
      const prueba = () => {};
      const pizza = new Pizza();
     // expect(pizza.set != prueba).toBeTruthy();
    })
    it("when name is equal habichuelas", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.name ='habichuelas';
      expect(pizza.name == 'habichuelas').toBeTruthy();
    })
    it("when ingredients is equal to ['Tomato', 'Beef', 'Romano cheese']", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingre =  ['Tomato', 'Beef', 'Romano cheese'];
      pizza.ingredients = ingre;
      expect(pizza.ingredients).toEqual(ingre);
    })
    it("size is little",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.size == 'little').toBeTruthy();
    })
    it("size set medium and priceBase is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size == 'medium' && pizza.priceBase == 7).toBeTruthy();
    })
    it("size set little and priceBase is 5",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'little';
      expect(pizza.size == 'little' && pizza.priceBase == 5).toBeTruthy();
    })
    it("size set big and priceBase is 9",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'big';
      expect(pizza.size == 'big' && pizza.priceBase == 9).toBeTruthy();
    })
    it("size set medium and priceBase is 7 else",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size !== 'big' && pizza.size!=='little' &&  pizza.size == 'medium' && pizza.priceBase == 7).toBeTruthy();
    })
    it("when priceBase is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.priceBase == 7).toBeTruthy();
    })
    it("when priceBase is seting",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(function(){  pizza.priceBase = 20;  }).toThrowError("Pizza: There are forbidden modify PriceBase");
    })
    it("when price is 12.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.price == 12.6).toBeTruthy();
    })
    it("when set price give throw error",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(function(){pizza.price=1000}).toThrowError("Pizza: There are forbidden modify Price");
    })
    it("when img is ./assets/hola.png",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.img ='./assets/hola.png';
      expect(pizza.img == './assets/hola.png').toBeTruthy();
    })
    it("when hash is ProsciuttoTomatoMozzarella CheeseHamRomano cheesemedium",()=>{
        const prueba = {
          name: 'Prosciutto',
          ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
          size: 'medium',
          img: 'assets/prosciutto.png'
        };
        const pizza = new Pizza(prueba);
        expect(pizza.hash == 'ProsciuttoTomatoMozzarella CheeseHamRomano cheesemedium').toBeTruthy();
    
    })
  })
  describe("should return false", () => {
    it("when getter is empty", () => {
      const prueba = () => {}
     // expect(Pizza.get == prueba).toBeFalsy();
    })
    it("when setter is empty", () => {
      const prueba = () => {};
      const pizza = new Pizza();
     // expect(pizza.set == prueba).toBeFalsy();
    })
    it("when name is diferent habichuelas", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.name ='habichuelas';
      expect(pizza.name != 'habichuelas').toBeFalsy();
    })
    it("when ingredients is diferent to ['Tomato', 'Beef', 'Romano cheese']", () => {
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingre =  ['Tomato', 'Beef', 'Romano cheese'];
      pizza.ingredients = ingre;
      expect(pizza.ingredients).not.toEqual("");
    })
    it("size isn't little",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.size != 'little').toBeFalsy();
    })
    it("size set medium and priceBase isn't 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size == 'medium' && pizza.priceBase != 7).toBeFalsy();
    })
    it("size set medium and size is diferent medium and priceBase is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size != 'medium' && pizza.priceBase == 7).toBeFalsy();
    })
    it("size set medium and priceBase is 7 else size is big",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size == 'big' && pizza.size!=='little' &&  pizza.size == 'medium'  && pizza.priceBase == 7).toBeFalsy();
    })
    it("size set medium and priceBase is 7 else size is little",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size !== 'big' && pizza.size=='little' &&  pizza.size == 'medium' && pizza.priceBase == 7).toBeFalsy();
    })
    it("size set medium and priceBase is 7 else pricebase diferent 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'medium';
      expect(pizza.size !== 'big' && pizza.size!='little' &&  pizza.size == 'medium' && pizza.priceBase != 7).toBeFalsy();
    })
    it("size set little  and size is diferent little and priceBase is 5",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'little';
      expect(pizza.size != 'little' && pizza.priceBase == 5).toBeFalsy();
    })
    it("size set little and priceBase isn't 5",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'little';
      expect(pizza.size == 'little' && pizza.priceBase != 5).toBeFalsy();
    })
    it("size set big and priceBase isn't 9",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'big';
      expect(pizza.size == 'big' && pizza.priceBase != 9).toBeFalsy();
    })
    it("size set big and size diferent big and priceBase is 9",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.size = 'big';
      expect(pizza.size != 'big' && pizza.priceBase == 9).toBeFalsy();
    })
    it("when priceBase is diferent 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.priceBase != 7).toBeFalsy();
    })
    it("when priceBase is seting not error",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(function(){  pizza.priceBase = 20;  }).not.toThrowError("");
    })
    it("when price isn't 12.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.price != 12.6).toBeFalsy();
    })
    it("when set price give throw msg error diferent",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(function(){pizza.price=1000}).not.toThrowError("");
    })
    it("when img is ./assets/hola.png",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      pizza.img ='./assets/hola.png';
      expect(pizza.img != './assets/hola.png').toBeFalsy();
    })
    it("when hash is diferent to ProsciuttoTomatoMozzarella CheeseHamRomano cheesemedium",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.hash != 'ProsciuttoTomatoMozzarella CheeseHamRomano cheesemedium').toBeFalsy();
  })

  })
})
describe("#equals", () => {
  describe("should return true", () => {
    it("when equals is fill", () => {
      const prueba = () => {}
      expect(Pizza.equals != prueba).toBeTruthy();
    })
    it("when hash of pizza_uno and pizza_dos is equals",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza_uno = new Pizza(prueba);
      const pizza_dos = new Pizza(prueba);
      expect(pizza_uno.equals(pizza_dos)).toBeTruthy();
    })
  })
  describe("should return false", () => {
    it("when equals is empty", () => {
      const prueba = () => {}
      expect(Pizza.equals == prueba).toBeFalsy();
    })
    it("when hash of pizza_uno and pizza_dos is diferent",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza_uno = new Pizza(prueba);
      const pizza_dos = new Pizza();
      expect(pizza_uno.equals(pizza_dos)).toBeFalsy();
    })
  })
})
describe("#calcPrice", () => {
  describe("should return true", () => {
    it("when calcPrice is fill", () => {
      const prueba = () => {}
    //  expect(Pizza.calcPrice != prueba).toBeTruthy();
    })
    it("when size is little and 3 ingredients is 10.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() == 10.6).toBeTruthy();
    })
    it("when size is little and 0 ingredients is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() == 7).toBeTruthy();
    })
    it("when size is medium and 3 ingredients is 10.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham'],
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() == 11.2).toBeTruthy();
    })
    it("when size is medium and 0 ingredients is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() == 7).toBeTruthy();
    })
    it("when size is little and 3 ingredients is 10.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham'],
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() == 11.8).toBeTruthy();
    })
    it("when size is big and 0 ingredients is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() == 7).toBeTruthy();
    })
  })
  describe("should return false", () => {
    it("when calcPrice is empty", () => {
      const prueba = () => {}
     // expect(Pizza.calcPrice == prueba).toBeFalsy();
    })
    it("when size is little and 3 ingredients isn't 10.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham'],
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() != 10.6).toBeFalsy();
    })
    it("when size is little and 0 ingredients is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        size: 'little',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() != 7).toBeFalsy();
    })
    it("when size is medium and 3 ingredients is 10.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham'],
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() != 11.2).toBeFalsy();
    })
    it("when size is medium and 0 ingredients is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() != 7).toBeFalsy();
    })
    it("when size is little and 3 ingredients is 10.6",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham'],
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() != 11.8).toBeFalsy();
    })
    it("when size is big and 0 ingredients is 7",()=>{
      const prueba = {
        name: 'Prosciutto',
        size: 'big',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      expect(pizza.calcPrice() != 7).toBeFalsy();
    })
  })
})
describe("#addIngredient", () => {
  describe("should return true", () => {
    it("when addIngredient is fill", () => {
      const prueba = () => {}
      expect(Pizza.addIngredient != prueba).toBeTruthy();
    })
    it("when ingredient is add to pizza correct",()=>{
      const pizza = new Pizza();
      const ingredient = "Chicken";
      pizza.addIngredient(ingredient);
      expect(pizza.ingredients.indexOf(ingredient)>=0).toBeTruthy();
    })
  })
  describe("should return false", () => {
    it("when addIngredient is empty", () => {
      const prueba = () => {}
      expect(Pizza.addIngredient == prueba).toBeFalsy();
    })
    it("when ingredient is add to pizza incorrect",()=>{
      const pizza = new Pizza();
      const ingredient = "Chicken";
      pizza.addIngredient(ingredient);
      expect(pizza.ingredients.indexOf(ingredient)<0).toBeFalsy();
    })
  })
})
describe("#removeIngredient", () => {
  describe("should return true", () => {
    it("when removeIngredient is fill", () => {
      const prueba = () => {}
      expect(Pizza.removeIngredient != prueba).toBeTruthy();
    })
    it("when remove a item of empty ingredients",()=>{
      const prueba = {
        name: 'Prosciutto',
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingredient = 'Tomato';

      expect(function(){pizza.removeIngredient(ingredient)}).toThrowError("PizzaError: Ingredient not found");
    })
    it("when remove item is in ingredients",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingredient = 'Tomato';
      pizza.removeIngredient(ingredient);
      expect(pizza.ingredients.indexOf(ingredient)<0).toBeTruthy();
    })
    it("when remove item isn't in ingredients",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingredient = 'Tomato';
      expect(function(){pizza.removeIngredient(ingredient)}).toThrowError("PizzaError: Ingredient not found");
    
    })
    
  })
  describe("should return false", () => {
    it("when removeIngredient is empty", () => {
      const prueba = () => {}
      expect(Pizza.removeIngredient == prueba).toBeFalsy();
    })
    it("when remove a item of empty ingredients error diferent",()=>{
      const prueba = {
        name: 'Prosciutto',
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingredient = 'Tomato';

      expect(function(){pizza.removeIngredient(ingredient)}).not.toThrowError("Prueba error");
    })
    it("when remove item isn't in ingredients error diferent",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingredient = 'Tomato';
      expect(function(){pizza.removeIngredient(ingredient)}).not.toThrowError("Prueba error");
    
    })
    it("when remove item is in ingredients",()=>{
      const prueba = {
        name: 'Prosciutto',
        ingredients: ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'],
        size: 'medium',
        img: 'assets/prosciutto.png'
      };
      const pizza = new Pizza(prueba);
      const ingredient = 'Tomato';
      pizza.removeIngredient(ingredient);
      expect(pizza.ingredients.indexOf(ingredient)>=0).toBeFalsy();
    })
  })
})



/*

describe("Pizza Model", () => {
  describe("#addIngredients", () => {
    it("should add an ingredient when the list is empty", () => {
      const emptyPizza = new Pizza();
      const ingredient = "Chicken";

      emptyPizza.addIngredient(ingredient);

      expect(emptyPizza.ingredients.length).toBe(1);
      expect(emptyPizza.ingredients[0]).toBe(ingredient);

    });
    it("should add an ingredient when the list has ingredients", () => {
      const pizza = new Pizza();
      const ingredient = "Chicken";
      pizza.ingredients = ["Pork", "Beef"];
      const numIngredients = pizza.ingredients.length;

      pizza.addIngredient(ingredient);

      expect(pizza.ingredients.length).toBe(numIngredients + 1);
      expect(pizza.ingredients[numIngredients]).toBe(ingredient);
    });
  });

  describe("#removeIngredients", () => {
    it("should remove an ingredient when there is in the list", () => {
      const pizza = new Pizza();
      const ingredient = "Pork";
      pizza.ingredients = ["Pork", "Beef"];
      const numIngredients = pizza.ingredients.length;

      pizza.removeIngredient(ingredient);

      expect(pizza.ingredients.length).toBe(numIngredients - 1);
      pizza.ingredients.forEach(
        ingredientInPizza => expect(ingredientInPizza).not.toBe(ingredient),
      );
    });
    it("should thrown an exception when there is not in the list", () => {
      const pizza = new Pizza();
      const ingredient = "Pork";
      pizza.ingredients = ["Beef", "Chicken"];

      expect(function () {
        pizza.removeIngredient(ingredient);
      }).toThrowError("PizzaError: Ingredient not found");

    });
  });

  describe("#setSize", () => {
    describe("should modify priceBase", () => {
      const expectValue = {
        priceBaseLittle: 5,
        priceBaseMedium: 7,
        priceBaseBig: 9,
      };
      it("when is little", () => {
        const pizzaLittle = new Pizza();
        pizzaLittle.size = "little";

        expect(pizzaLittle.priceBase).toBe(expectValue.priceBaseLittle);

      });
      it("when is medium", () => {
        const pizzaMedium = new Pizza();
        pizzaMedium.size = "medium";

        expect(pizzaMedium.priceBase).toBe(expectValue.priceBaseMedium);

      });
      it("when is big", () => {
        const pizzaBig = new Pizza();
        pizzaBig.size = "big";

        expect(pizzaBig.priceBase).toBe(expectValue.priceBaseBig);

      });
    });
  });
  describe("#calcPrice", () => {
    describe("should return the price of a pizza", () => {
      it("when it's a little pizza with 3 ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 8.6;

        expect(pizza.calcPrice()).toBe(expectPrice);

      });
      it("when it's a little pizza without ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "little";
        const expectPrice = 5;

        expect(pizza.calcPrice()).toBe(expectPrice);

      });

      it("when it's a medium pizza with 3 ingredients", () => {
        const pizza = new Pizza();
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 11.2;

        expect(pizza.calcPrice()).toBe(expectPrice);

      });
      it("when it's a medium pizza without ingredients", () => {
        const pizza = new Pizza();
        const expectPrice = 7;

        expect(pizza.calcPrice()).toBe(expectPrice);

      });

      it("when it's a big pizza with 3 ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "big";
        pizza.ingredients = ["Tomato", "Pork", "Beef"];
        const expectPrice = 13.8;

        expect(pizza.calcPrice()).toBe(expectPrice);

      });
      it("when it's a big pizza without ingredients", () => {
        const pizza = new Pizza();
        pizza.size = "big";
        const expectPrice = 9;

        expect(pizza.calcPrice()).toBe(expectPrice);

      });
    });
  });
  describe("#equals", () => {
    describe("should return true", () => {
      it("when two empty pizzas are compared", () => {
        const pizza1 = new Pizza();
        const pizza2 = new Pizza();
        expect(pizza1.equals(pizza2)).toBeTruthy()
      });
      it("when two pizzas have the same ingredients (2), size and name", () => {
        const pizza1 = new Pizza();
        const pizza2 = new Pizza();
        const pizzaValue = {
          name: "test1",
          ingredients: ["cheese", "bacon"],
          size: "big",
        };
        pizza1.name = pizzaValue.name;
        pizza1.ingredients = pizzaValue.ingredients;
        pizza1.size = pizzaValue.size;
        pizza2.name = pizzaValue.name;
        pizza2.ingredients = pizzaValue.ingredients;
        pizza2.size = pizzaValue.size;
        expect(pizza1.equals(pizza2)).toBeTruthy();
      });
    });
    describe("should return false", () => {
      it("when two pizza have different size", () => {
        const pizza1 = new Pizza();
        pizza1.size = "little";
        const pizza2 = new Pizza();
        expect(pizza1.equals(pizza2)).toBeFalsy();
      });
      xit("when two pizza have different ingredients", () => { });
      xit("when two pizza have different name", () => { });
      xit("when two pizza have different size, and same name", () => { });

    });
  });

});*/