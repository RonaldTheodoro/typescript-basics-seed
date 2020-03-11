interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
};

interface Pizzas {
    data: Pizza[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
    return {
        name,
        sizes,
        getAvailableSizes() {
            return this.sizes;
        }
    };
}

pizza = createPizza('pepperoni', ['small', 'medium', 'large']);

console.log(pizza);