console.log("Hello TypeScript!");

function foo() {
  console.log("foo");
}

const bar = () => {
  console.log("bar");
};

foo();

bar();

const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] },
  { name: 'Cheese', toppings: ['cheese'] },
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
    name: 'Blazing inferno',
    getName: function () {
        console.log(this.name);
    }
}

pizza.getName();
