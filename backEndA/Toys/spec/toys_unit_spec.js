let request = require("request");
let toys = require("../modules/toys");

describe("Unit tests on toys module", () => {
    describe("load all toys", () => {
        //positive test to load all toys
        it("have four elements", () => {
            let results = toys.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load toys with taxes", () => {
        //positive test to load toys from Raleigh
        it("with location Raleigh", () => {
            let results = toys.query_by_arg("Raleigh");
            expect(results[0].price).toBe("21.94");
        });
        //positive test to load toys from Durham
        it("with location Durham", () => {
            let results = toys.query_by_arg("Durham");
            expect(results[0].price).toBe("22.04");
        });
        //negative test to load toys from China (does not exist)
        it("with invalid location China", () => {
            expect( () => {
                toys.query_by_arg("China");
                expect(results).toBeNull();
            })
        });
       
    });

});