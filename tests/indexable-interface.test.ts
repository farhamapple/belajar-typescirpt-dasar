describe('Indexable Interface', function(){
    it('should support indexable interface', function(){
        interface StringArray {
            [index: number]: string
        }
        const names: StringArray = ["Eko", "Kurniawan", "Khannedy"];
        console.info(names[0]);
    })
})
