abstract class Sizes {

    constructor(protected sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes(): string[] {
        return this.sizes;
    }

}


class Pizza extends Sizes {
    public topping: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    addTopping(topping: string) {
        this.topping.push(topping);
    }

}


const pizza = new Pizza('Pepperoni', ['small', 'large']);

pizza.addTopping('cheese')

console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);