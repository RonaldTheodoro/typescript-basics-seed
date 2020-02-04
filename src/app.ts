function sumAll(msg: string, ...arr: number[]) {
    console.log(msg);
    return arr.reduce((prev: number, next: number) => prev + next);
}

console.log(sumAll('hello', 1,2,3,4,5,6,7,8,9,10,11));