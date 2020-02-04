const pizza = {
    name: 'Pepperoni',
    price: 15
};

const toppings = ['pepperoni'];

const order = {
    ...pizza,
    price: 25,
    toppings
};

console.log(order);