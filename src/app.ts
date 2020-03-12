interface Sizes {
    sizes: string[];
}

interface Pizza extends Sizes {
    name: string;
    toppings?: number;
    getAvailableSizes(): string[];
};

interface Pizzas {
    data: Pizza[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[], toppings?: number): Pizza {
    return {
        name,
        sizes,
        toppings,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('pepperoni', ['small', 'medium', 'large']);

pizza.toppings = 1;

console.log(pizza);
console.log(pizza.getAvailableSizes());