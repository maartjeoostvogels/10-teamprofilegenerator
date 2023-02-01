const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialisation", () => {
        it("Test Constructor", () => {

            const name = Maartje;
            const id = 1;
            const email = "moostvogels@example.com";
            const role = "Employee";

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual(role);
        });
    });
});