describe('Function Parameter', function(){
    it('should return function parameter', function(){
        function sayHello(name: string = "Guest"): string {
            return "Hello " + name;
        }

        expect(sayHello()).toBe("Hello Guest");
        //expect(sayHello('Eko')).toBe("Hello Eko");    
    });
})
