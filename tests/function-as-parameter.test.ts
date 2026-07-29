describe('function as parameter', function(){
    it('should support function as parameter', function(){
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        function toLower(name: string): string {
            return name.toLowerCase();
        }

        // Fungsi sayHello tidak berubah, behaviornya bisa diganti
        expect(sayHello("Eko", toUpper)).toBe("Hello EKO");
        expect(sayHello("Eko", toLower)).toBe("Hello eko");
    });

    it('should support filter array', function(){
        function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
            const result: T[] = [];
            for (const item of arr) {
                if (predicate(item)) {
                    result.push(item);
                }
            }
            return result;
        }

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // Filter dengan logic berbeda tanpa mengubah fungsi utama
        const evenNumbers = filterArray(numbers, (n) => n % 2 === 0);
        const oddNumbers = filterArray(numbers, (n) => n % 2 !== 0);
        const greaterThan5 = filterArray(numbers, (n) => n > 5);

        expect(evenNumbers).toEqual([2, 4, 6, 8, 10]);
        expect(oddNumbers).toEqual([1, 3, 5, 7, 9]);
        expect(greaterThan5).toEqual([6, 7, 8, 9, 10]);
    });

    it('should support discount calculation', function(){
        type DiscountStrategy = (price: number) => number;

        function calculatePrice(price: number, discount: DiscountStrategy): number {
            return discount(price);
        }

        // Strategy berbeda untuk diskon
        const noDiscount: DiscountStrategy = (price) => price;
        const memberDiscount: DiscountStrategy = (price) => price * 0.9; // 10% off
        const vipDiscount: DiscountStrategy = (price) => price * 0.75; // 25% off
        const flashSale: DiscountStrategy = (price) => price * 0.5; // 50% off

        expect(calculatePrice(100000, noDiscount)).toBe(100000);
        expect(calculatePrice(100000, memberDiscount)).toBe(90000);
        expect(calculatePrice(100000, vipDiscount)).toBe(75000);
        expect(calculatePrice(100000, flashSale)).toBe(50000);
    });
})
