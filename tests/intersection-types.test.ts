describe('Intersection Types', function(){
    it('should support intersection types', function(){
        interface HasName{
            name:string
        }
        
        interface HasId{
            id: number
        }

        type Domain = HasId & HasName;

        interface Person extends HasName, HasId{
            
        }

        const domain: Domain = {
            name: "Eko",
            id: 1
        }

        console.info(domain);
    })
})