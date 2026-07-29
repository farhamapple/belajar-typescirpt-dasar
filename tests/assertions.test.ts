import type { Person } from "../src/person";

describe('Assertion', function(){
    it('should return assertion', function(){
        const person: any = {
            id: 1,
            name: "Eko",
        }

        const person2 : Person = person as Person;

        console.info(person2);
    });
})