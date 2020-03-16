class Sizes {

    constructor(private sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes(): string[] {
        return this.sizes;
    }

}


const sizes = new Sizes(['small', 'medium']);

console.log(sizes.availableSizes);

sizes.availableSizes = ['medium', 'large'];

console.log(sizes.availableSizes);

class Pizza {
    public topping: string[] = [];

    constructor(readonly name: string) { }

    addTopping(topping: string) {
        this.topping.push(topping);
    }

}


const pizza = new Pizza('Pepperoni');

pizza.addTopping('cheese')

console.log(pizza.name);
console.log(pizza);