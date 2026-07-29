describe('Function in Interface', function(){
    it('should Support function in interface', function(){
        interface Person{
            name: string,
            age: number,
            sayHello: (name: string) => string
        }

        const person: Person = {
            name: "Eko",
            age: 20,
            sayHello: (name: string) => `Hello ${name}`
        }

        console.info(person.sayHello("Kurniawan"));
    })
})