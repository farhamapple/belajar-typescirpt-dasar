describe('Object', function(){
    it('should return object', function(){
       const person: {
        id: string,
        name: string
       } = {
        id: "1",
        name: "Eko"
       };

       console.info(person);
    });
})