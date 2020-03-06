let sumOrder: (price: number, quantity?: number) => number;


sumOrder = (x, y) => {
    if (y) {
        return x * y;
    }
    return x;
};

const sum: number = sumOrder(15);

console.log(`Total sum: ${sum}`)