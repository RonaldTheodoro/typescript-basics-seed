let sumOrder: (price: number, quantity?: number) => number;


sumOrder = (x, y = 1) => x * y;

console.log(`Total sum: ${sumOrder(15)}`)
console.log(`Total sum: ${sumOrder(15, 5)}`)