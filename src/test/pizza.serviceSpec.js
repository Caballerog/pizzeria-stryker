describe("#PizzaService", () => {
    describe("should return true", () => {
        it("when PizzaService is fill", () => {
            const prueba = () => {}
            expect(PizzaService != prueba).toBeTruthy();
        })

    })
    describe("should return false", () => {
        it("when PizzaService is empty", () => {
            const prueba = () => {}
            expect(PizzaService == prueba).toBeFalsy();
        })

    })
})
describe("#getter y setter", () => {
    describe("should return true", () => {
        it("whe  get pizzasSelected is fill",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
    
            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.pizzaSelected != undefined).toBeTruthy();
    
           })
           it("whe  get Pizzas is fill",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
    
            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.pizzas != undefined).toBeTruthy();
    
           })
           it("whe  get ingredients is fill",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
    
            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.ingredients != undefined).toBeTruthy();
    
           })
    })
    describe("should return false", () => {
        it("whe  get is empty",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
    
            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.get == prueba).toBeFalsy();
    
           })
           it("whe  set is empty",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
    
            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.set == prueba).toBeFalsy();
    
           })
    })
})
describe("#addIngredientPizza", () => {

    describe("should return true", () => {

        it("when addIngredientPizza is fill", () => {
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];

            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.addIngredientPizza != prueba).toBeTruthy();
        })
        it("when add ingredient the ingredients is [Tomato,Beef]",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            const ingre = ["Tomato","Beef"];
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];            
            const pizzaService = new PizzaService(pizzas, ingredients);
            pizzaService.addIngredientPizza("Tomato");
            pizzaService.addIngredientPizza("Beef");
            expect(pizzaService.pizzaSelected.ingredients ).toEqual(ingre);
                        
        })
    })
    describe("should return false", () => {

        it("when addIngredientPizza is fill", () => {
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];

            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.addIngredientPizza == prueba).toBeFalsy();
        })
        it("when add ingredient the ingredients is different [Tomato,Beef]",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            const ingre = ["Tomato"];
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];            
            const pizzaService = new PizzaService(pizzas, ingredients);
            pizzaService.addIngredientPizza("Tomato");
            pizzaService.addIngredientPizza("Beef");
            expect(pizzaService.pizzaSelected.ingredients ).not.toEqual(ingre);
                        
        })
    })
})
describe("#removeIngredientPizza", () => {
    describe("should return true", () => {

        it("when removeIngredientPizza is fill", () => {
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];

            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.removeIngredientPizza != prueba).toBeTruthy();
        })
        it("when remove tomato the ingredients is [Tomato,Beef]",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            const ingre = ["Beef"];
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];            
            const pizzaService = new PizzaService(pizzas, ingredients);
            pizzaService.addIngredientPizza("Tomato");
            pizzaService.addIngredientPizza("Beef");
            pizzaService.removeIngredientPizza("Tomato");
            expect(pizzaService.pizzaSelected.ingredients ).toEqual(ingre);
                        
        })
    })
    describe("should return false", () => {
       it("whe  removeIngredientPizza is empty",()=>{
        const prueba = () => {};
        const pruebapizza = new Pizza();
        const pizzas = [];
        pizzas.push(pruebapizza);
        pizzas.push(pruebapizza);
        pizzas.push(pruebapizza);
        const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];

        const pizzaService = new PizzaService(pizzas, ingredients);
        expect(pizzaService.removeIngredientPizza == prueba).toBeFalsy();

       })
       it("when remove tomato the ingredients is diferenet [Tomato,Beef]",()=>{
        const prueba = () => {};
        const pruebapizza = new Pizza();
        const pizzas = [];
        pizzas.push(pruebapizza);
        const ingre = ["Beef","Tomato"];
        const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];            
        const pizzaService = new PizzaService(pizzas, ingredients);
        pizzaService.addIngredientPizza("Tomato");
        pizzaService.addIngredientPizza("Beef");
        pizzaService.removeIngredientPizza("Tomato");
        expect(pizzaService.pizzaSelected.ingredients ).not.toEqual(ingre);
                    
    })

    })
})
describe("#setSizePizza", () => {
    describe("should return true", () => {
        it("when setSizePizza is fill", () => {
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];

            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.setSizePizza != prueba).toBeTruthy();
        })
        it("set Size to little",()=>{
            
                const prueba = () => {};
                const pruebapizza = new Pizza();
                const pizzas = [];
                pizzas.push(pruebapizza);
                const ingre = ["Beef"];
                const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];            
                const pizzaService = new PizzaService(pizzas, ingredients);
                pizzaService.setSizePizza("little");
                expect(pizzaService.pizzaSelected.size == "little").toBeTruthy();                 
    
        })
    })
    describe("should return false", () => {
        it("whe  setSizePizza is empty",()=>{
            const prueba = () => {};
            const pruebapizza = new Pizza();
            const pizzas = [];
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            pizzas.push(pruebapizza);
            const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
    
            const pizzaService = new PizzaService(pizzas, ingredients);
            expect(pizzaService.setSizePizza == prueba).toBeFalsy();
    
           })
           it("set Size to little false test",()=>{
            
                const prueba = () => {};
                const pruebapizza = new Pizza();
                const pizzas = [];
                pizzas.push(pruebapizza);
                const ingre = ["Beef"];
                const ingredients = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];            
                const pizzaService = new PizzaService(pizzas, ingredients);
                pizzaService.setSizePizza("little");
                expect(pizzaService.pizzaSelected.size != "little").toBeFalsy();                 
    
        })
    })
})