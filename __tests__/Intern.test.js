const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialisation", () => {
        it("Test Constructor", () => {

            const name = "Maartje";
            const id = 1;
            const email = "moostvogels@example.com";
            const school = "Fontys";
            const role = "Intern";

            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getSchool()).toEqual(school);
            expect(obj.getRole()).toEqual(role);
        });
    });
});