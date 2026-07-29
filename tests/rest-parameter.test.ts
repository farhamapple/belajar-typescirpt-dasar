describe('Rest Parameter', function(){
    it('should support rest parameter', function(){
        function sum(...values: number[]): number {
            let total: number = 0;
            values.forEach(value => total += value);
            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    })
})
