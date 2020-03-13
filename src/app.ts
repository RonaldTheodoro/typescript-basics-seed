class Pizza {

    constructor(public name: string, public topping: string[] = []) { }

    addTopping(topping: string) {
        this.topping.push(topping);
    }

}


const pizza = new Pizza('Pepperoni');

pizza.addTopping('cheese')

console.log(pizza);