describe('Array', function(){
    it('should return array', function(){
        const names: string[] = ["Eko", "Kurniawan", "Khannedy"];
        //expect(names).toEqual(["Eko", "Kurniawan", "Khannedy"]);

        const value: number[] = [1, 2, 3];

        console.info(names);
        console.info(value);
    });

    it('should support readonly array', function(){
        const names: readonly string[] = ["Eko", "Kurniawan", "Khannedy"];
        //names.push("Eko");

        console.info(names);
        console.info(names[0]);
        console.info(names.length);
    })
})