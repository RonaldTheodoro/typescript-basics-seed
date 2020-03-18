interface SizesInterfaces {
    availableSizes: string[];
}


abstract class Sizes implements SizesInterfaces {

    constructor(protected sizes: string[]) { }

    set availableSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes(): string[] {
        return this.sizes;
    }

}


interface PizzaInterface extends SizesInterfaces {
    readonly name: string;
    toppings: string[];

    updateSizes(sizes: string[]): void;
    addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {
    public toppings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes(sizes: string[]) {
        this.sizes = sizes;
    }

    addTopping(topping: string) {
        this.toppings.push(topping);
    }

}


const pizza = new Pizza('Pepperoni', ['small', 'large']);

pizza.addTopping('cheese')

console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);