const Employee = require("../lib/employee");

describe("Manager", () => {
    describe("Initialisation", () => {
        it("Test Constructor", () => {

            const name = Maartje;
            const id = 1;
            const email = "moostvogels@example.com";
            const officeNumber = 1;
            const role = "Manager";

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
            expect(obj.getRole()).toEqual(role);
        });
    });
});