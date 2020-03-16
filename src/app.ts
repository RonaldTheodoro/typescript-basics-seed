class Sizes {

    constructor(public sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes(): string[] {
        return this.sizes;
    }

}


class Pizza extends Sizes {
    public topping: string[] = [];

    constructor(readonly name: string, public sizes: string[]) {
        super(sizes);
    }

    addTopping(topping: string) {
        this.topping.push(topping);
    }

}


const pizza = new Pizza('Pepperoni', ['small', 'large']);

pizza.addTopping('cheese')

console.log(pizza.availableSizes);
console.log(pizza.name);
console.log(pizza);