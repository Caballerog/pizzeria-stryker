const controller = function (platform) {
    const _ = undefined;
    this.pizzas;
    this.ingredients;

    const gui = {
        getNode: element => platform.getElementById(element),
        setPizzaNodeQuantity: function (pizza, quantity) {
            this.getNode(pizza.hash + 'Quantity').childNodes[0].nodeValue = quantity;
        },
        setPizzaNodePrice: function (pizza, price) {
            this.getNode(pizza.hash + 'Price').childNodes[0].nodeValue = price.toFixed(2) + '€';
        },
        setSizePrice: function (name, price) {
            this.getNode('span' + name).childNodes[0].nodeValue = price.toFixed(2) + '€';
        },
        initEvents: function () {
            gui.getNode("addIngredient").addEventListener('click', addIngredient);
            gui.getNode("rmIngredient").addEventListener('click', removeIngredient);
        },
    };

    const init = (pizzaService, orderService) => {
        this.pizzaService = pizzaService;
        /*   this.orderService = orderService; */

        this.pizzas = pizzaService.pizzas;
        this.ingredients = pizzaService.ingredients;

        gui.initEvents();
        showPizzas();
    }

    /* Métodos de vistas */
    function insertText(text, parentNode) {
        const element = platform.createTextNode(text);
        parentNode.appendChild(element)
    }

    function generateNode(type, listClass, attributes, parentNode) {
        const element = platform.createElement(type);
        if (listClass) element.classList.add(...listClass)
        if (attributes) {
            Object.entries(attributes).forEach(attribute => {
                element.setAttribute(attribute[0], attribute[1])
            });
        }
        return parentNode.appendChild(element);
    }

    const showPizzas = () => {
        Object.keys(this.pizzas).forEach(keyPizza => {
            printPizza(this.pizzas[keyPizza]);
        });
    }

    const radioSize = (pizza, size) => {
        showDefaultIngredients(pizza);
        showAvaiableIngredients(pizza);
        //Si la pizza es la sleccionado
        this.pizzaService.setSizePizza(size);
        gui.setSizePrice(pizza.name, pizza.price);
    }

    const printPizza = pizza => {
        const mainDiv = generateNode('div', ['col-md-3'], _, gui.getNode('listPizzas'));
        const pizzaDiv = generateNode('div', ['pizza'], _, mainDiv);
        generateNode('img', ['col-md-8'], {
            src: pizza.img,
        }, pizzaDiv);

        const containerAllRadios = generateNode('div', ['col-md-3'], _, pizzaDiv);
        insertText('Tamaño', generateNode('h4', _, _, containerAllRadios));
        ["little", "medium", "big"].forEach(sizePizza => {
            const radioDiv1 = generateNode('div', ['radio'], _, containerAllRadios);

            const inputRadio1 = generateNode('input', _, {
                type: 'radio',
                name: 'pizza' + pizza.name,
                checked: 'checked',
            }, radioDiv1);

            inputRadio1.onclick = () => radioSize(pizza, sizePizza);
            insertText(sizePizza, generateNode('label', _, _, radioDiv1));
        });
        insertText(pizza.name, generateNode('div', ['col-md-12', 'title'], _, pizzaDiv));
        const price = generateNode('div', ['col-md-5', 'price'], _, pizzaDiv)

        insertText('Precio: ', price);

        insertText(pizza.price + '€', generateNode('span', _, {
            id: 'span' + pizza.name,
        }, price))

        const butAdd = generateNode('button', ['addButton', 'pull-right'], {
            type: 'button'
        }, pizzaDiv);

        butAdd.onclick = () => {
            this.pizzaService.pizzaSelected = pizza;
            showSelectedPizza();
        }
        insertText('+', butAdd);
    }

    function showDefaultIngredients(pizza) {
        const addedIngredients = gui.getNode("addedIngredients");
        removeNodes(addedIngredients);
        pizza.ingredients.forEach(ingredient => {
            addedIngredients.options.add(new Option(ingredient, ingredient));
            addedIngredients.options[addedIngredients.childElementCount - 1].disabled = true;
        });
    }
    function showAvaiableIngredients(pizza) {
        const availableIngredients = gui.getNode("availableIngredients");
        removeNodes(availableIngredients);
        this.ingredients.forEach(ingredient => {
            availableIngredients.options.add(new Option(ingredient, ingredient));
        });
    }
    function showSelectedPizza() {
        const pizza = this.pizzaService.pizzaSelected;
        removeNodes(gui.getNode('selectedPizza'));
        generateNode('img', ['img-selected', 'pull-left', 'col-md-6'], {
            src: pizza.img,
        }, gui.getNode('selectedPizza'));

        showDefaultIngredients(pizza);
        showAvaiableIngredients(pizza);

        const addPizzaToOrder = generateNode('button', _, {
            type: 'button',
        }, gui.getNode('selectedPizza'));

        insertText('Añadir', addPizzaToOrder);

        addPizzaToOrder.onclick = function () {
            addPizza(pizza);
        }
    }

    const addIngredient = () => {
        const availableIngredients = Array.from(gui.getNode("availableIngredients").selectedOptions);
        const addedIngredients = gui.getNode("addedIngredients");

        availableIngredients.forEach(ingredient => {
            this.pizzaService.addIngredientPizza(ingredient.value);
            gui.getNode("availableIngredients").remove(ingredient.index);
            addedIngredients.options.add(new Option(ingredient.value, ingredient.value));
        });
    }

    const removeIngredient = () => {
        const addedIngredients = Array.from(gui.getNode("addedIngredients").selectedOptions);
        const availableIngredients = gui.getNode("availableIngredients");
        addedIngredients.forEach(ingredient => {
            this.pizzaService.removeIngredientPizza(ingredient.value);
            gui.getNode("addedIngredients").remove(ingredient.index);
            availableIngredients.options.add(new Option(ingredient.value, ingredient.value));
            /* this.pizzaService.removePriceIngredient(this.pizzaSelected, this.pizzaService.getPriceMod(this.pizzaSelected)); */
        });

    }

    const isHeaderOrder = () => gui.getNode('orderTable');
    const isNodeOrder = (pizza) => gui.getNode(pizza.hash + 'Name');

    function addPizza(pizza) {
        this.orderService.addItem(pizza);

        if (isNodeOrder(pizza)) {
            addPizzaExisting(pizza);
            return;
        }

        if (!isHeaderOrder()) addHeaderOrder();

        addPizzaNew(pizza);
    }

    function addPizzaExisting(pizza) {
        const quantity = this.orderService.item(pizza).quantity;
        const price = this.orderService.detailPrice(pizza);
        gui.setPizzaNodeQuantity(pizza, quantity);
        gui.setPizzaNodePrice(pizza, price);
    }

    function addPizzaNew(pizza) {
        const ingredientsid = pizza.ingredients.toString().replace(/,| /g, '');

        const trBody = generateNode('tr', _, {
            id: pizza.hash + 'tr',
        }, gui.getNode('orderTable'));

        const tdName = generateNode('td', _, {
            id: pizza.hash + 'Name'
        }, trBody);
        insertText(`${pizza.name}(${pizza.ingredients})`, tdName);

        const tdPrice = generateNode('td', _, {
            id: pizza.hash + 'Price'
        }, trBody);
        insertText(pizza.price, tdPrice);

        const tdQuantity = generateNode('td', _, {
            id: pizza.hash + 'Quantity'
        }, trBody);
        insertText(this.orderService.item(pizza).quantity, tdQuantity);

        insertText(pizza.size, generateNode('td', _, _, trBody));

        const deleteButton = generateNode('button', ['deleteButton'], {
            type: 'button',
        }, trBody);

        deleteButton.onclick = () => {
            this.orderService.removeItem(pizza);
            gui.getNode(pizza.hash + 'tr')
                .parentNode
                .removeChild(gui.getNode(pizza.hash + 'tr'));
        }
        insertText('X', deleteButton);
    }


    function addHeaderOrder() {
        const table = generateNode('table', ['table', 'table-striped'], _, gui.getNode('order'));
        const tHead = generateNode('thead', _, _, table);
        const trHead = generateNode('tr', _, _, tHead);

        insertText('Nombre', generateNode('th', _, _, trHead));
        insertText('Precio', generateNode('th', _, _, trHead));
        insertText('Cantidad', generateNode('th', _, _, trHead));
        insertText('Tamaño', generateNode('th', _, _, trHead));

        generateNode('tbody', _, {
            id: 'orderTable',
        }, table);
    }

    function removeNodes(node) {
        while (node.hasChildNodes())
            node.removeChild(node.firstChild);
    }

    return {
        init,
        gui,
        removeNodes,
        addHeaderOrder,
        addPizzaExisting,
        addPizza,
        isNodeOrder,
        isHeaderOrder,
        removeIngredient,
        addIngredient,
        showSelectedPizza,
        showAvaiableIngredients,
        showDefaultIngredients,
        printPizza,
        radioSize,
        showPizzas,
        generateNode,
        insertText
    }
}(window.document);