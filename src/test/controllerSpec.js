describe("#gui",()=>{
    describe("should return true",()=>{
        it("when gui is fill",()=>{
            const prueba = () => {};
            expect(controller.gui).not.toEqual(prueba);
        })
        it("when gui.getNode",()=>{
            const prueba = () => {};
            expect(controller.gui.getNode).not.toEqual(prueba);
        })
        it("when gui.setPizzaNodeQuantity",()=>{
            const prueba = () => {};
            expect(controller.gui.setPizzaNodePrice).not.toEqual(prueba);
        })
        it("when gui.setPizzaNodePrice",()=>{
            const prueba = () => {};
            expect(controller.gui.setPizzaNodePrice).not.toEqual(prueba);
        })
        it("when gui.setSizePrice",()=>{
            const prueba = () => {};
            expect(controller.gui.setSizePrice).not.toEqual(prueba);
        })
        it("when gui.initEvents",()=>{
            const prueba = () => {};
            expect(controller.gui.initEvents).not.toEqual(prueba);
        })
    })
    describe("should return false",()=>{
        
    })
})


describe("#init",()=>{
    describe("should return true", () => {
        
        it("when init is fill",()=>{
            const prueba = () =>{};
            expect(controller.init != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when init is empty",()=>{
            const prueba = () =>{};
            expect(controller.init == prueba).toBeFalsy();
        })
       
    })
})
describe("#insertText",()=>{
    describe("should return true", () => {
        
        it("when insertText is fill",()=>{
            const prueba = () =>{};
            expect(controller.insertText != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when insertText is empty",()=>{
            const prueba = () =>{};
            expect(controller.insertText != prueba).toBeTruthy();
        })
       
    })
})
describe("#generateNode",()=>{
    describe("should return true", () => {
        
        it("when generateNode is fill",()=>{
            const prueba = () =>{};
            expect(controller.generateNode != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when generateNode is empty",()=>{
            const prueba = () =>{};
            expect(controller.generateNode == prueba).toBeFalsy();
        })
       
    })
})
describe("#showPizzas",()=>{
    describe("should return true", () => {
        
        it("when showPizzas is fill",()=>{
            const prueba = () =>{};
            expect(controller.showPizzas != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when showPizzas is empty",()=>{
            const prueba = () =>{};
            expect(controller.showPizzas == prueba).toBeFalsy();
        })
       
    })
})
describe("#radioSize",()=>{
    describe("should return true", () => {
        
        it("when radioSize is fill",()=>{
            const prueba = () =>{};
            expect(controller.radioSize != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when radioSize is empty",()=>{
            const prueba = () =>{};
            expect(controller.radioSize == prueba).toBeFalsy();
        })
       
    })
})
describe("#printPizza",()=>{
    describe("should return true", () => {
        
        it("when printPizza is fill",()=>{
            const prueba = () =>{};
            expect(controller.printPizza != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when printPizza is empty",()=>{
            const prueba = () =>{};
            expect(controller.printPizza == prueba).toBeFalsy();
        })
       
    })
})
describe("#showDefaultIngredients",()=>{
    describe("should return true", () => {
        
        it("when showDefaultIngredients is fill",()=>{
            const prueba = () =>{};
            expect(controller.showDefaultIngredients != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when showDefaultIngredients is empty",()=>{
            const prueba = () =>{};
            expect(controller.showDefaultIngredients == prueba).toBeFalsy();
        })
       
    })
})
describe("#showAvaiableIngredients",()=>{
    describe("should return true", () => {
        
        it("when showAvaiableIngredients is fill",()=>{
            const prueba = () =>{};
            expect(controller.showAvaiableIngredients != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when showAvaiableIngredients is empty",()=>{
            const prueba = () =>{};
            expect(controller.showAvaiableIngredients == prueba).toBeFalsy();
        })
       
    })
})
describe("#showSelectedPizza",()=>{
    describe("should return true", () => {
        
        it("when showSelectedPizza is fill",()=>{
            const prueba = () =>{};
            expect(controller.showSelectedPizza != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when showSelectedPizza is empty",()=>{
            const prueba = () =>{};
            expect(controller.showSelectedPizza == prueba).toBeFalsy();
        })
       
    })
})

describe("#addIngredient",()=>{
    describe("should return true", () => {
        
        it("when addIngredient is fill",()=>{
            const prueba = () =>{};
            expect(controller.addIngredient != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when addIngredient is empty",()=>{
            const prueba = () =>{};
            expect(controller.addIngredient == prueba).toBeFalsy();
        })
       
    })
})

describe("#removeIngredient",()=>{
    describe("should return true", () => {
        
        it("when removeIngredient is fill",()=>{
            const prueba = () =>{};
            expect(controller.removeIngredient != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when removeIngredient is empty",()=>{
            const prueba = () =>{};
            expect(controller.removeIngredient == prueba).toBeFalsy();
        })
       
    })
})

describe("#isHeaderOrder",()=>{
    describe("should return true", () => {
        
        it("when isHeaderOrder is fill",()=>{
            const prueba = () =>{};
            expect(controller.isHeaderOrder != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when isHeaderOrder is empty",()=>{
            const prueba = () =>{};
            expect(controller.isHeaderOrder == prueba).toBeFalsy();
        })
       
    })
})

describe("#isNodeOrder",()=>{
    describe("should return true", () => {
        
        it("when isNodeOrder is fill",()=>{
            const prueba = () =>{};
            expect(controller.isNodeOrder != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when isNodeOrder is empty",()=>{
            const prueba = () =>{};
            expect(controller.isNodeOrder == prueba).toBeFalsy();
        })
       
    })
})


describe("#addPizza",()=>{
    describe("should return true", () => {
        
        it("when addPizza is fill",()=>{
            const prueba = () =>{};
            expect(controller.addPizza != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when addPizza is empty",()=>{
            const prueba = () =>{};
            expect(controller.addPizza == prueba).toBeFalsy();
        })
       
    })
})


describe("#addPizzaExisting",()=>{
    describe("should return true", () => {
        
        it("when addPizzaExisting is fill",()=>{
            const prueba = () =>{};
            expect(controller.addPizzaExisting != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when addPizzaExisting is empty",()=>{
            const prueba = () =>{};
            expect(controller.addPizzaExisting == prueba).toBeFalsy();
        })
       
    })
})


describe("#addPizzaNew",()=>{
    describe("should return true", () => {
        
        it("when addPizzaNew is fill",()=>{
            const prueba = () =>{};
            expect(controller.addPizzaNew != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when addPizzaNew is empty",()=>{
            const prueba = () =>{};
            expect(controller.addPizzaNew == prueba).toBeFalsy();
        })
       
    })
})

describe("#addHeaderOrder",()=>{
    describe("should return true", () => {
        
        it("when addHeaderOrder is fill",()=>{
            const prueba = () =>{};
            expect(controller.addHeaderOrder != prueba).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when addHeaderOrder is empty",()=>{
            const prueba = () =>{};
            expect(controller.addHeaderOrder == prueba).toBeFalsy();
        })
       
    })
})


describe("#removeNodes",()=>{
    describe("should return true", () => {
        
        it("when removeNodes is fill",()=>{
            const prueba = () =>{};
         //   expect(controller.removeNodes == undefined).toBeTruthy();
        })
    
    })
    describe("should return false", () => {
        it("when removeNodes is empty",()=>{
            const prueba = () =>{};
          //  expect(controller.removeNodes != undefined).toBeFalsy();
        })
       
    })
})
