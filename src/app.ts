let sumOrder: (price: number, quantity?: number) => number;


sumOrder = (x, y) => (y) ? x * y : x;

console.log(`Total sum: ${sumOrder(15)}`)
console.log(`Total sum: ${sumOrder(15, 5)}`)