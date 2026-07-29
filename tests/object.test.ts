describe('Object', function(){
    it('should return object', function(){
       let person: {
        id: string,
        name: string
       } = { id: "", name: "" };

       person.id = "2";
       person.name = "Kurniawan";

       console.info(person);
    });
})