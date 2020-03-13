function Pizza(name: string) {
    this.name = name;
    this.topping = [];
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
    this.topping.push(topping);
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('cheese')

console.log(pizza);