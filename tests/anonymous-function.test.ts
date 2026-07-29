describe('Anonymous Function', function(){
    it('should support anonymous function in variable', function(){
        const sayHello = function(name: string): string {
            return `Hello ${name}`;
        };

        expect(sayHello("Eko")).toBe("Hello Eko");
    });

    it('should support arrow function', function(){
        const sayHello = (name: string): string => {
            return `Hello ${name}`;
        };

        const sayHelloShort = (name: string): string => `Hello ${name}`;

        expect(sayHello("Eko")).toBe("Hello Eko");
        expect(sayHelloShort("Eko")).toBe("Hello Eko");
    });

    it('should support anonymous function as callback', function(){
        const numbers = [1, 2, 3, 4, 5];

        const doubled = numbers.map(function(n: number): number {
            return n * 2;
        });

        expect(doubled).toEqual([2, 4, 6, 8, 10]);
    });

    it('should support arrow function as callback', function(){
        const numbers = [1, 2, 3, 4, 5];

        const doubled = numbers.map((n: number): number => n * 2);
        const even = numbers.filter((n: number): boolean => n % 2 === 0);

        expect(doubled).toEqual([2, 4, 6, 8, 10]);
        expect(even).toEqual([2, 4]);
    });

    it('should support sorting with anonymous function', function(){
        const products = [
            { name: "Laptop", price: 15000 },
            { name: "Mouse", price: 5000 },
            { name: "Keyboard", price: 10000 },
        ];

        // Sorting dengan anonymous function
        products.sort((a, b) => a.price - b.price);

        expect(products[0].name).toBe("Mouse");
        expect(products[1].name).toBe("Keyboard");
        expect(products[2].name).toBe("Laptop");
    });

    it('should support setTimeout simulation', function(){
        function simulateAsync(name: string, callback: (result: string) => void): void {
            const result = `Hello ${name}`;
            callback(result);
        }

        let actual = "";

        simulateAsync("Eko", (result: string) => {
            actual = result;
        });

        expect(actual).toBe("Hello Eko");
    });

    it('should support grouping data', function(){
        interface Transaction {
            category: string;
            amount: number;
        }

        const transactions: Transaction[] = [
            { category: "Food", amount: 50000 },
            { category: "Transport", amount: 20000 },
            { category: "Food", amount: 30000 },
            { category: "Shopping", amount: 100000 },
            { category: "Transport", amount: 15000 },
        ];

        const summary = transactions.reduce<Record<string, number>>((acc, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
            return acc;
        }, {});

        expect(summary["Food"]).toBe(80000);
        expect(summary["Transport"]).toBe(35000);
        expect(summary["Shopping"]).toBe(100000);
    });
})
