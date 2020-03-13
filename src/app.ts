class Pizza {
    name: string;
    topping: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addTopping(topping: string) {
        this.topping.push(topping);
    }

}


const pizza = new Pizza('Pepperoni');

pizza.addTopping('cheese')

console.log(pizza);