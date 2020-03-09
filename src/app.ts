let pizza: {
    name: string,
    price: number,
    quantity?: number,
    getName(): string,
    setName(name: string): void
};

pizza = {
    name: 'Plain Old Pepperoni',
    price: 20,
    getName() {
        return this.name
    },
    setName(name) {
        this.name = name;
    }
}

console.log(pizza.getName());
