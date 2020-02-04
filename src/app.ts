const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};

interface IPizza {
    name: string,
    toppings: string[]
};

function order({ name: pizzaName, toppings: pizzaToppings }: IPizza) {
    return { pizzaName, pizzaToppings };
}

const { pizzaName } = order(pizza);
console.log(pizzaName);

const toppings = ['pepperoni', 'bacon', 'chilli'];

function logToppings([ first, second, third ]: string[]) {
    console.log(first);
    console.log(second);
    console.log(third);
}

logToppings(toppings);