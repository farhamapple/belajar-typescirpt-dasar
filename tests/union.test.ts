describe('Union Type', () => {
    it('should return union type', () => {
        let sample: boolean |string | number = "Eko";
        sample = 20;
        sample = true;
        //sample = [];

        console.info(sample);

        
    });

    it('should support typeof operator', () => {
        function process(value: string | number | boolean): string | number | boolean {
            if(typeof value === "string") {
                return value.toLowerCase();
            }else if(typeof value === "number") {
                return value.toFixed(2);
            }else{
                return !value;
            }
        }

        expect(process("Eko")).toBe("eko");
        expect(process(20)).toBe("20.00");
        expect(process(true)).toBe(false);
    })
})
