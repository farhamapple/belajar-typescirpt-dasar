import type { Customer } from "../src/enum";
import { CustomerType } from "../src/enum";

describe('Enum', function(){
    it('should return enum', function(){
        const customer: Customer = {
            id: "1",
            name: "Eko",
            type: CustomerType.REGULAR
        };

        console.info(customer);
    });
})