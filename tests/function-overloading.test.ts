describe('Function Overloading', function(){
    it('should support function overloading', function(){
        function callMe(value: string): string;
        function callMe(value: number): number;
        function callMe(value: any): any{
            if(typeof value === "string"){
                return value.toLowerCase();
            }else if(typeof value === "number"){
                return value.toFixed(2);
            }
        }

        expect(callMe("Eko")).toBe("eko");
        expect(callMe(20)).toBe("20.00");
    })
})