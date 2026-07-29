import type { Employee, Manager } from "../src/employee";

describe('Extends Interface', function(){
    it('should support extends interface', function(){
        const employee : Employee = {
            id: 1,
            name: "Eko",
            division: "IT"
        }

        console.info(employee);

        const manager: Manager = {
            id: 1,
            name: "Eko",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager);
    })
})