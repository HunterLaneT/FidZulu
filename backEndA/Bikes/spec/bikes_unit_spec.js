let request = require("request");
let bikes = require("../modules/bikes");

describe("Unit tests on bikes module", () => {
    describe("load all bikes", () => {
        //positive test to load all food
        it("have four elements", () => {
            let results = bikes.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load bikes with taxes", () => {
        //positive test to load bikes from Raleigh
        it("with location Raleigh", () => {
            let results = bikes.query_by_arg("Raleigh");
            expect(results[0].price).toBe("81.57");
        });
        //positive test to load bikes from Durham
        it("with location Durham", () => {
            let results = bikes.query_by_arg("Durham");
            expect(results[0].price).toBe("81.95");
        });
        //negative test to load bikes from China (does not exist)
        it("with invalid location China", () => {
            let results = bikes.query_by_arg("China");
            expect(results).toBeNull();
        });
       
    });

});
