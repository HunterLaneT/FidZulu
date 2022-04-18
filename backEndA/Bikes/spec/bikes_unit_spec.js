let request = require("request");
let bikes = require("../modules/bikes");

describe("Unit tests on bikes module", () => {
    describe("load all bikes", () => {
        //positive test to load all contacts
        it("have two elements", () => {
            let results = bikes.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load bikes with taxes", () => {
        //positive test to load contact by last name
        it("with location Raleigh", () => {
            let results = bikes.query_by_arg("Raleigh");
            expect(results[0].price).toBe("81.57");
        });
        //positive test to load contact by first name
        it("with location Durham", () => {
            // TODO: test loading with first name "John"
            let results = bikes.query_by_arg("Durham");
            expect(results[0].price).toBe("81.95");
        });
        //negative test to load contact by cell phone (value does not exists)
        it("with invalid location China", () => {
            expect( () => {
                bikes.query_by_arg("China");
            }).toThrow("arg is not defined");
        });
       
    });

});
