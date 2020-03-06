let sumOrder: (price: number, quantity: number) => number;


sumOrder = (x, y) => x * y;

const sum: number = sumOrder(15, 5);

console.log(`Total sum: ${sum}`)