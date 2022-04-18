let request = require("request");
let food = require("../modulesfood");

describe("Unit tests on food module", () => {
    describe("load all food", () => {
        //positive test to load all food
        it("have four elements", () => {
            let results = food.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load bikes with taxes", () => {
        //positive test to load food from Raleigh
        it("with location Raleigh", () => {
            let results = food.query_by_arg("Raleigh");
            expect(results[0].price).toBe("81.57");
        });
        //positive test to load food from Durham
        it("with location Durham", () => {
            let results = food.query_by_arg("Durham");
            expect(results[0].price).toBe("81.95");
        });
        //negative test to load food from China (does not exist)
        it("with invalid location China", () => {
            expect( () => {
                food.query_by_arg("China");
            }).toThrow("arg is not defined");
        });
       
    });

});
