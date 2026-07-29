describe('Function Optional Paramter', function(){
    it('shoud support optioinal paramter', function(){
        function sayHello(firstName: string, lastName? : string): string {
            if(lastName){
                return `Hello ${firstName} ${lastName}`;
            }else{
                return `Hello ${firstName}`;
            }
        }

        expect(sayHello("Eko")).toBe("Hello Eko");
        expect(sayHello("Eko", "Kurniawan")).toBe("Hello Eko Kurniawan");
    })
})