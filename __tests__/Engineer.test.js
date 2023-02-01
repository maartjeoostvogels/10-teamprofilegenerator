const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialisation", () => {
        it("Test Constructor", () => {

            const name = Maartje;
            const id = 1;
            const email = "moostvogels@example.com";
            const github = "maartjeoostvogels"
            const role = "Engineer";

            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getGithub()).toEqual(github);
            expect(obj.getRole()).toEqual(role);
        });
    });
});