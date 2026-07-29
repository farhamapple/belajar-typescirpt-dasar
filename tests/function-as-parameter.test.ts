describe('function as parameter', function(){
    it('should support function as parameter', function(){
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello("Eko", toUpper)).toBe("Hello EKO");
    });
})