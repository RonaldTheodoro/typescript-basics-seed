class Coupon {

    static allowed: string[] = ['Pepperoni', 'Blazing inferno'];

    static create(percentage: number): string {
        return `PIZZA_RESTAURANT_${percentage}`;
    }

}

console.log(Coupon.allowed);
console.log(Coupon.create(25));