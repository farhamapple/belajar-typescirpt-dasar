import type { Seller } from "../src/seller"
describe('Interface Seller', function(){
    it('should support in typescript', function(){

        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: '1234567890',
            npwp: '1234567890'
        }

        seller.name = "Toko XYZ";

        console.info(seller)
    })

    it('should support function interface', function(){
        
        interface AddFunction{
            (value1: number, value2: number): number
        }

        const add : AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }
        expect(add(1, 2)).toBe(3);
    })
})