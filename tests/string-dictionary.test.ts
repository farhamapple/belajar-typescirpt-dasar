describe('String Dictionary', function(){
    it('should support StringDictionary', function(){
        interface StringDictionary {
            [key: string]: string
        }
        const names: StringDictionary = {
            "Eko": "Eko",
            "Kurniawan": "Kurniawan",
            "Khannedy": "Khannedy"
        };
        console.info(names["Eko"]);
    })
})
