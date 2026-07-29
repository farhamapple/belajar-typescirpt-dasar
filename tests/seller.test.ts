import type { Seller } from "../src/seller"

describe('Interface Seller', function(){
    it('should support in typescript', function(){

        const seller: Seller = {
            id: 1,
            name: 'Toko ABC'
        }

        console.info(seller)
    })
})