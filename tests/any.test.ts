describe('Any', function(){
    it('should return any', function(){
        const name: any = "Hello Eko";
        console.info(name);

        const person: any = {
            id: 1,
            name: "Eko",
            age: 20
        };

        person.age = 30;
        person.name = 1;
        console.info(person);
    });
})