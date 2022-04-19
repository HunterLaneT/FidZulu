let request = require("request");
let food = require("../modules/food");

describe("Unit tests on food module", () => {
    describe("load all food", () => {
        //positive test to load all food
        it("have four elements", () => {
            let results = food.list();
            expect(results.length).toBe(4);
        });
        
    });
    describe("load food object", () => {
        //postive test to check matching properties
        it("contains name property", () => {
            let results = food.list();
            expect(results[0].hasOwnProperty('name'));
        });
        it("contains brand property", () => {
            let results = food.list();
            expect(results[0].hasOwnProperty('brand'));
        });
        it("contains weight property", () => {
            let results = food.list();
            expect(results[0].hasOwnProperty('weight'));
        });
        it("contains calories property", () => {
            let results = food.list();
            expect(results[0].hasOwnProperty('calories'));
        });
        it("contains price property", () => {
            let results = food.list();
            expect(results[0].hasOwnProperty('price'));
        });
    });
    describe("load food with taxes", () => {
        //positive test to load food from Raleigh
        it("with location Raleigh", () => {
            let results = food.query_by_arg("Raleigh");
            expect(results[0].price).toBe("3.06");
        });
        //positive test to load food from Durham
        it("with location Durham", () => {
            let results = food.query_by_arg("Durham");
            expect(results[0].price).toBe("3.08");
        });
        //negative test to load food from China (does not exist)
        it("with invalid location China", () => {
            let results = food.query_by_arg("China");
            expect(results).toBeNull();
        });
       
    });

});
