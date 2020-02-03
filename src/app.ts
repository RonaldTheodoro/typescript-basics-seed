const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());

const toppings = ['pepperoni'];

function createOrder(
    pizza: {name: string, price: number},
    toppings: string[]
) {
    return {pizza, toppings};
}
console.log(createOrder(pizza, toppings));