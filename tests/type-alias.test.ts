import type { Category, Product } from "../src/type-alias";

describe('Type Alias', function(){
    it('should return type alias', function(){

        const category : Category = {
            id: 1,
            name: "Eko"
        };

        const product: Product = {
            id: "1",
            name: "Eko",
            price: 1000,
            category
        };

        console.info(category);
        console.info(product)
    });
})