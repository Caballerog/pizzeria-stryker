describe("#AppSetting",()=>{
    describe("should return true", () => {
        
        it("when AppSettings is fill",()=>{
            const prueba = [];
            expect(AppSettings != prueba).toBeTruthy();
        })
        it("when AppSettings.pizzas is fill",()=>{
            const prueba = ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese'];
            expect(AppSettings.pizzas[0].ingredients).toEqual(prueba);
        })
        it("when AppSettings.pizzas is fill",()=>{
            const prueba = ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese', 'Mushrooms'];
            expect(AppSettings.pizzas[1].ingredients).toEqual(prueba);
        })
        it("when AppSettings.pizzas is fill",()=>{
            const prueba = ['Tomato', 'Mozzarella Cheese', 'Ham', 'Romano cheese', 'Blue cheese', 'Mushrooms'];
            expect(AppSettings.pizzas[2].ingredients).toEqual(prueba);
        })
        it("when AppSettings.pizzas is fill",()=>{
            const prueba = ['Tomato'];
            expect(AppSettings.pizzas[3].ingredients).toEqual(prueba);
        })
        it("when AppSettings.pizzas is fill",()=>{
            const prueba = [];
            expect(AppSettings.pizzas != prueba).toBeTruthy();
        })
        it("when AppSettings.ingredients is fill",()=>{
            const prueba = ['Tomato', 'Mozzarella Cheese', 'Beef', 'Romano cheese', 'Pork', 'Onion', 'Pineapple', 'Citric', 'Blue cheese', 'Egg', 'Lemon', 'Ham', 'Mushrooms'];
            
            expect(AppSettings.ingredients).toEqual(prueba);
        })

       
    })
    describe("should return false", () => {
        it("when AppSettings is empty",()=>{
            const prueba = [];
            expect(AppSettings == prueba).toBeFalsy();
        })
        it("when AppSettings.pizzas is empty",()=>{
            const prueba = [];
            expect(AppSettings.pizzas == prueba).toBeFalsy();
        })
        it("when AppSettings.pizzas is ",()=>{
            const prueba = [];
            expect(AppSettings.pizzas[0].ingredients).not.toEqual(prueba);
        })
        it("when AppSettings.pizzas is empty",()=>{
            const prueba = [];
            expect(AppSettings.pizzas[1].ingredients).not.toEqual(prueba);
        })
        it("when AppSettings.pizzas is empty",()=>{
            const prueba = [];
            expect(AppSettings.pizzas[2].ingredients).not.toEqual(prueba);
        })
        it("when AppSettings.pizzas is empty",()=>{
            const prueba = [];
            expect(AppSettings.pizzas[3].ingredients).not.toEqual(prueba);
        })
        it("when AppSettings.ingredients is empty",()=>{
            const prueba = [];
            expect(AppSettings.ingredients).not.toEqual(prueba);
        })
    })
})